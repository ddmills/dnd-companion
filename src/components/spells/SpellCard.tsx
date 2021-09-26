import { Box, Heading, Truncate } from '@primer/components';
import { Spell } from '../../generated/graphql';

interface SpellCardProps {
    spell: Spell
}

export const SpellCard = ({ spell }: SpellCardProps) => {
    return (
        <Box
            borderColor="border.default"
            borderWidth={1}
            borderStyle="solid"
            p={2}
            m={2}
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
        </Box>
    );
};
