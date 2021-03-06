import { Box, StyledOcticon, Text, Button, themeGet } from '@primer/components';
import { StarFillIcon } from '@primer/octicons-react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UnstyledButton } from '../../components/buttons/UnstyledButton';
import { useSpellbook, useSpellbooks } from '../../contexts/SpellbooksContext';
import { useSpellFavorites } from '../../contexts/SpellFavoritesContext';
import { Spell } from '../../models/Spell';
import {
    getClassNameShort,
    getSpellSchoolColor,
    levelFriendly,
} from '../../util/LevelStringFriendly';

const Card = styled(Box)`
    display: block;
    flex: 1 1 auto;
    color: inherit;
    text-decoration: inherit;

    &:last-child {
        padding-right: 24px;
    }

    &:active,
    &:hover {
        background-color: ${themeGet('border.muted')};
    }
`;

const SpellButton = styled(Button)`
    font-size: 14px;
    padding: 4px 8px;
`;

const AddButton = styled(SpellButton)`
    background-color: #274779;
    border-color: #101d29a8;
`;

const RemoveButton = styled(SpellButton)`
    background-color: #373e47;
    border-color: #0f1c29a1;
`;

const FavoriteButton = styled(UnstyledButton)``;

interface SpellRowProps {
    spell: Spell;
}

export const SpellRow = ({ spell }: SpellRowProps) => {
    const spellbook = useSpellbook();
    const { saveSpellbook } = useSpellbooks();
    const { isFavorite, toggleFavorite } = useSpellFavorites();
    const mods = [];

    const isFav = isFavorite(spell);
    const toggleFav = useCallback(() => {
        toggleFavorite(spell);
    }, [spell, toggleFavorite]);

    if (spell.ritual) {
        mods.push('rit');
    }

    if (spell.concentration) {
        mods.push('con');
    }

    const inSpellbook = (spell: Spell): boolean => {
        return spellbook!.spells.some((s) => s.name === spell.name);
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            borderBottom="1px solid #343940"
            p={3}
        >
            <Box display="flex" justifyContent="space-between">
                <Card as={Link} to={`/spell/${spell.slug}`} display="block">
                    <Text fontSize={2} fontWeight={600}>
                        {spell.name}
                    </Text>
                    <Box>
                        <Text fontSize={1}>
                            {levelFriendly(spell.level)} level
                            <Text color={getSpellSchoolColor(spell.school)}>
                                {' ' + spell.school.toLowerCase()}
                            </Text>
                            <Text color="#6e7b8a">
                                {' [' + spell.components.join(', ')}]
                            </Text>
                        </Text>
                    </Box>
                </Card>
                {spellbook && (
                    <Box pl={3}>
                        {inSpellbook(spell) ? (
                            <RemoveButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();

                                    const idx = spellbook.spells.findIndex(
                                        (s) => s.name === spell.name
                                    );
                                    spellbook.spells.splice(idx, 1);
                                    saveSpellbook(spellbook);
                                }}
                            >
                                Remove
                            </RemoveButton>
                        ) : (
                            <AddButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();

                                    spellbook.spells.push(spell);
                                    saveSpellbook(spellbook);
                                }}
                            >
                                Add
                            </AddButton>
                        )}
                    </Box>
                )}
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Text fontSize={1} color="#6e7b8a">
                    {spell.classes.map((c) => getClassNameShort(c)).join('/')}
                </Text>
                {/* {mods.length > 0 && (
                    <Text fontSize={1} color="#6e7b8a">
                        ({mods.join(', ')})
                    </Text>
                )} */}
                <FavoriteButton onClick={toggleFav}>
                    <StyledOcticon
                        icon={StarFillIcon}
                        size={18}
                        mr={2}
                        color={isFav ? '#bea262' : '#353c45'}
                    />
                </FavoriteButton>
            </Box>
        </Box>
    );
};
