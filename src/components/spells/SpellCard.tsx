import { Box, Text, themeGet } from '@primer/components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Spell } from '../../Models/Spell';

interface SpellCardProps {
    spell: Spell;
}

const Card = styled(Box)`
    display: block;
    color: inherit;
    text-decoration: inherit;

    &:active,
    &:hover {
        background-color: ${themeGet('colors.border.muted')};
    }
`;

export const SpellCard = ({ spell }: SpellCardProps) => (
    <Card
        p={4}
        pt={3}
        pb={3}
        display="block"
        as={Link}
        to={`/spell/${spell.name}`}
    >
        <Text fontSize={2} fontWeight={600}>
            [{spell.level}] {spell.name}
        </Text>
    </Card>
);
