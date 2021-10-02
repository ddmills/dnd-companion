import { Box, Text, themeGet } from '@primer/components';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FixedSizeList } from 'react-window';
import styled from 'styled-components';
import { Spell } from '../../Models/Spell';
import { useResizeDetector } from 'react-resize-detector';
import {
    getSpellSchoolColor,
    levelFriendly,
} from '../../util/LevelStringFriendly';

const Card = styled(Box)`
    display: block;
    color: inherit;
    text-decoration: inherit;

    border-bottom: 1px solid ${themeGet('colors.border.subtle')};

    &:active,
    &:hover {
        background-color: ${themeGet('border.muted')};
    }
`;

interface RowProps {
    index: number;
    style: any;
    data: Spell[];
}

const Row = ({ index, style, data }: RowProps) => {
    const spell = data[index];
    const mods = [];

    if (spell.ritual) {
        mods.push('rit');
    }

    if (spell.concentration) {
        mods.push('con');
    }

    return (
        <div style={style}>
            <Card
                p={4}
                pt={3}
                pb={3}
                display="block"
                as={Link}
                to={`/spell/${spell.uriSafeName}`}
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
                <Box>
                    <Text fontSize={1} color="#6e7b8a">
                        {spell.classes.join(', ')}
                    </Text>
                </Box>
            </Card>
        </div>
    );
};

interface InfiniteSpellListProps {
    spells: Spell[];
}

const SpellListContainer = styled.div`
    height: 100%;
`;

export const InfiniteSpellList = ({ spells }: InfiniteSpellListProps) => {
    const containerRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const { width, height } = useResizeDetector({ targetRef: containerRef });

    return (
        <SpellListContainer ref={containerRef}>
            <FixedSizeList
                width={width ?? 320}
                height={height ?? 300}
                itemCount={spells.length}
                itemData={spells}
                itemSize={105}
            >
                {Row}
            </FixedSizeList>
        </SpellListContainer>
    );
};
