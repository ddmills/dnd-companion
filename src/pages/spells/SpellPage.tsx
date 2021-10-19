import { Box, Flash, Heading, StyledOcticon, Text } from '@primer/components';
import { AlertIcon, BookmarkFillIcon, StarFillIcon } from '@primer/octicons-react';
import { PageHeader } from '../../layout/PageHeader';
import { useParams } from 'react-router';
import { getSpellSchoolColor } from '../../util/LevelStringFriendly';
import { getSpell } from '../../data/Spells';
import { useNavigation } from '../../contexts/NavigationContext';
import { ReactNodeArray, useCallback, useEffect } from 'react';
import { useSpellFavorites } from '../../contexts/SpellFavoritesContext';
import reactStringReplace from 'react-string-replace';
import styled from 'styled-components';

interface SpellPageParams {
    slug: string;
}

const renderPart = (label?: string, value?: string) => {
    if (!value) {
        return;
    }

    return (
        <Box>
            <Text fontWeight="bold" display="inline">
                {label}:
            </Text>
            <Text display="inline"> {value}</Text>
        </Box>
    );
};

const isSpellMinorHeading = (text: string): boolean => {
    return text.length < 24 && !text.startsWith('-') && text.endsWith('.');
};

const isSpellListItem = (text: string): boolean => {
    return text.startsWith('- ');
};

const reg = /((?:\d+)?d(?:\d+)(?:[+-]\d+)?)/g;

const DiceRoll = styled.span`
    font-weight: 700;
    color: #bdeaec;
`;

const renderDescText = (text: string): ReactNodeArray => {
    return reactStringReplace(text, reg, (match, i) => {
        return <DiceRoll key={i}>{match}</DiceRoll>;
    });
};

const renderDescription = (description: string[]): ReactNodeArray => {
    return description.flatMap((desc, idx) => (
        <Text
            mt={isSpellListItem(desc) ? 0 : 2}
            mb={isSpellListItem(desc) ? 0 : 2}
            key={idx}
            fontWeight={isSpellMinorHeading(desc) ? 700 : 400}
        >
            {renderDescText(desc)}
        </Text>
    ));
};

export const SpellPage = () => {
    const { slug } = useParams<SpellPageParams>();
    const spell = getSpell(slug);
    const { setSelectedSpell } = useNavigation();
    const {isFavorite, toggleFavorite} = useSpellFavorites();
    const notFound = !spell;

    useEffect(() => {
        setSelectedSpell(spell);
    }, [spell, setSelectedSpell]);

    const favorite = useCallback(() => {
        if (spell) {
            toggleFavorite(spell);
        }
    }, [toggleFavorite, spell]);

    return (
        <Box display="flex" flexDirection="column">
            <PageHeader>
                <PageHeader.Title
                    icon={BookmarkFillIcon}
                    title={notFound ? 'Not found' : spell.name}
                />
                {spell && (
                    <PageHeader.Action
                        icon={StarFillIcon}
                        label="Favorite"
                        onClick={favorite}
                        color={isFavorite(spell) ? '#bea262' : 'inherit'}
                    />
                )}
            </PageHeader>
            <Box
                display="flex"
                flexDirection="column"
                mt={3}
                ml={4}
                mr={4}
                mb={4}
            >
                {notFound ? (
                    <Flash variant="danger">
                        <StyledOcticon icon={AlertIcon} />
                        <Text fontWeight={400}>Spell not found</Text>
                    </Flash>
                ) : (
                    <>
                        <Heading
                            fontSize={3}
                            mb={3}
                            color={getSpellSchoolColor(spell.school)}
                        >
                            Level {spell.level}{' '}
                            <Text>{spell.school?.toLowerCase()}</Text>
                        </Heading>
                        {renderPart('Casting time', spell.castingTime)}
                        {renderPart('Duration', spell.duration)}
                        {renderPart('Range', spell.range)}
                        {renderPart('Components', spell.components?.join(', '))}
                        {renderPart(
                            'Concentration',
                            spell.concentration ? 'yes' : 'no'
                        )}
                        {renderPart('Ritual', spell.ritual ? 'yes' : 'no')}
                        {renderPart('Classes', spell.classes.join(', '))}

                        <Box
                            display="flex"
                            flexDirection="column"
                            mt={3}
                            mb={3}
                        >
                            {renderDescription(spell.description)}
                        </Box>

                        {spell.higherLevelDesc?.length! > 0 && (
                            <>
                                <Text fontWeight="bold" display="inline">
                                    Higher level:
                                </Text>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    mt={2}
                                    mb={4}
                                >
                                    {renderDescription(spell.higherLevelDesc!)}
                                </Box>
                            </>
                        )}
                    </>
                )}
            </Box>
        </Box>
    );
};
