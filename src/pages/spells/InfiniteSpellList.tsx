import { useEffect, useRef } from 'react';
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
    selectedSpell?: Spell;
}

const SpellListContainer = styled.div`
    height: 100%;
`;

export const InfiniteSpellList = ({ spells, selectedSpell }: InfiniteSpellListProps) => {
    const containerRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const listRef = useRef() as React.MutableRefObject<FixedSizeList>;
    const { width, height } = useResizeDetector({ targetRef: containerRef });

    useEffect(() => {
        if (selectedSpell) {
            const selectedIdx = spells.findIndex((s) => s.slug === selectedSpell.slug);

            if (selectedIdx > 0) {
                listRef.current.scrollToItem(selectedIdx, 'center');
            }
        }
    }, [selectedSpell, spells]);

    return (
        <SpellListContainer ref={containerRef}>
            <FixedSizeList
                ref={listRef}
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
