import { useRef } from 'react';
import { FixedSizeList } from 'react-window';
import styled from 'styled-components';
import { Spell } from '../../models/Spell';
import { useResizeDetector } from 'react-resize-detector';
import { SpellRow } from './SpellRow';

interface RowProps {
    index: number;
    style: any;
    data: Spell[];
}

const Row = ({ index, style, data }: RowProps) => {
    const spell = data[index];

    return (
        <div style={style}>
            <SpellRow spell={spell} />
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
                itemSize={81}
            >
                {Row}
            </FixedSizeList>
        </SpellListContainer>
    );
};
