import { Box, Flash, Heading, StyledOcticon, Text } from '@primer/components';
import { AlertIcon, BookmarkFillIcon } from '@primer/octicons-react';
import { PageHeader } from '../../layout/PageHeader';
import { useParams } from 'react-router';
import { getSpellSchoolColor } from '../../util/LevelStringFriendly';
import { getSpell } from '../../data/Spells';

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

export const SpellPage = () => {
    const { slug } = useParams<SpellPageParams>();
    const spell = getSpell(slug);
    const notFound = !spell;

    return (
        <Box display="flex" flexDirection="column">
            <PageHeader>
                <PageHeader.Title
                    icon={BookmarkFillIcon}
                    title={notFound ? 'Not found' : spell.name}
                />
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
                            {spell.description.map((desc, idx) => (
                                <Text
                                    mb={2}
                                    key={idx}
                                    fontWeight={
                                        isSpellMinorHeading(desc) ? 700 : 400
                                    }
                                >
                                    {desc}
                                </Text>
                            ))}
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
                                    {spell.higherLevelDesc?.map((desc, idx) => (
                                        <Text mb={2} key={idx}>
                                            {desc}
                                        </Text>
                                    ))}
                                </Box>
                            </>
                        )}
                    </>
                )}
            </Box>
        </Box>
    );
};
