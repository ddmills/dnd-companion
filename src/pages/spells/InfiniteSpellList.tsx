import { Box, Text, themeGet } from '@primer/components';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FixedSizeList } from 'react-window';
import styled from 'styled-components';
import { Spell } from '../../Models/Spell';

const Card = styled(Box)`
    display: block;
    color: inherit;
    text-decoration: inherit;

    &:active,
    &:hover {
        background-color: ${themeGet('colors.border.muted')};
    }
`;

interface RowProps {
    index: number;
    style: any;
    data: Spell[];
}

const Row = ({ index, style, data }: RowProps) => {
    const spell = data[index];

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
                <Text fontSize={2} fontWeight={600}>
                    [{spell.level}] {spell.name}
                </Text>
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
    const [size, setSize] = useState({ width: 200, height: 200 });

    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    useEffect(() => {
        const { width, height } = containerRef.current.getBoundingClientRect();

        setSize({
            width,
            height,
        });
    }, [dimensions.width, dimensions.height]);

    return (
        <SpellListContainer ref={containerRef}>
            <FixedSizeList
                width={size.width}
                height={size.height}
                itemCount={spells.length}
                itemData={spells}
                itemSize={56}
            >
                {Row}
            </FixedSizeList>
        </SpellListContainer>
    );
};
