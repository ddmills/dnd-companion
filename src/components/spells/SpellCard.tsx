import { Box, Heading, Truncate } from '@primer/components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Spell } from '../../generated/graphql';

interface SpellCardProps {
    spell: Spell
}

const Card = styled(Box)`
    display: block;
    color: inherit;
    text-decoration: inherit;

    &:active, &:hover {
        background-color: #eee;
    }
`;

export const SpellCard = ({ spell }: SpellCardProps) => {
    return (
        <Card
            borderColor="border.default"
            borderWidth={1}
            borderStyle="solid"
            borderRadius={2}
            p={2}
            m={2}
            display="block"
            as={Link}
            to={`/spell/${spell.name}`}
        >
            <Heading fontSize={1}>[{spell.level}] {spell.name}</Heading>
            <Box flex="1 1 auto">
                {spell.classes?.map((spellClass) => {
                    return (
                        <span key={spellClass!._id}>{spellClass!.name} </span>
                    );
                })}
            </Box>
            <Box>
                <Truncate maxWidth="100%" title={spell.desc!.toString()}>{spell.desc}</Truncate>
            </Box>
        </Card>
    );
};
