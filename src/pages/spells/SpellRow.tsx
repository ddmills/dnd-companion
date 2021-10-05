import { Box, StyledOcticon, Text, themeGet } from '@primer/components';
import { PlusIcon, DashIcon } from '@primer/octicons-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UnstyledButton } from '../../components/buttons/UnstyledButton';
import { useSpellbook, useSpellbooks } from '../../contexts/SpellbooksContext';
import { Spell } from '../../models/Spell';
import {
    getSpellSchoolColor,
    levelFriendly,
} from '../../util/LevelStringFriendly';

const Card = styled(Box)`
    display: block;
    flex: 1 1 auto;
    color: inherit;
    text-decoration: inherit;

    &:active,
    &:hover {
        background-color: ${themeGet('border.muted')};
    }
`;

interface SpellRowProps {
    spell: Spell;
}

export const SpellRow = ({ spell }: SpellRowProps) => {
    const spellbook = useSpellbook();
    const { saveSpellbook } = useSpellbooks();
    const mods = [];

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
            justifyContent="space-between"
            borderBottom="1px solid #343940"
        >
            <Card
                as={Link}
                to={`/spell/${spell.uriSafeName}`}
                pl={4}
                pt={3}
                pb={3}
                display="block"
            >
                <Box display="flex" justifyContent="space-between">
                    <Text fontSize={2} fontWeight={600}>
                        {spell.name}
                    </Text>
                    {mods.length > 0 && (
                        <Text fontSize={1}>({mods.join(', ')})</Text>
                    )}
                </Box>
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
                {/* <Box>
                    <Text fontSize={1} color="#6e7b8a">
                        <Truncate title={spell.classes.join(', ')} maxWidth="100%">
                            {spell.classes.join(', ')}
                        </Truncate>
                    </Text>
                </Box> */}
            </Card>
            {spellbook && (
                <Box p={2} display="flex">
                    {inSpellbook(spell) ? (
                        <UnstyledButton
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
                            <Box p={2}>
                                <StyledOcticon icon={DashIcon} size={24} />
                            </Box>
                        </UnstyledButton>
                    ) : (
                        <UnstyledButton
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();

                                spellbook.spells.push(spell);
                                saveSpellbook(spellbook);
                            }}
                        >
                            <Box p={2}>
                                <StyledOcticon icon={PlusIcon} size={24} />
                            </Box>
                        </UnstyledButton>
                    )}
                </Box>
            )}
        </Box>
    );
};
