import {
    Box,
    Text,
    ButtonPrimary,
    TextInput,
    themeGet,
} from '@primer/components';
import { StackIcon } from '@primer/octicons-react';
import { useCallback, useState } from 'react';
import { Dialog } from '../../components/Dialog';
import { playerClasses } from '../../data/PlayerClasses';
import { capitalizeFirstLetter } from '../../util/LevelStringFriendly';
import styled from 'styled-components';
import { removeFromArray } from '../../util/ArrayUtils';
import { useSpellbooks } from '../../contexts/SpellbooksContext';
import { generateId } from '../../util/IDGenerator';

interface SpellbookCreateProps {
    isOpen: boolean;
    onDismiss: () => void;
}

export const SpellbookCreate = ({
    isOpen,
    onDismiss,
}: SpellbookCreateProps) => {
    const [name, setName] = useState('');
    const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
    const { saveSpellbook } = useSpellbooks();

    const onNameChange = useCallback(
        (e: any) => {
            setName(e.target.value);
        },
        [setName]
    );

    const toggleClass = useCallback(
        (name) => {
            if (selectedClasses.includes(name)) {
                setSelectedClasses(
                    removeFromArray<string>(selectedClasses, name)
                );
            } else {
                setSelectedClasses([...selectedClasses, name]);
            }
        },
        [selectedClasses, setSelectedClasses]
    );

    const isClassSelected = useCallback(
        (className: string) => selectedClasses.includes(className),
        [selectedClasses]
    );

    const createSpellbook = useCallback(() => {
        saveSpellbook({
            spellbookId: generateId(),
            name: name.trim(),
            playerClasses: [...selectedClasses],
        });
        onDismiss();
    }, [name, selectedClasses, saveSpellbook, onDismiss]);

    return (
        <Dialog isOpen={isOpen} onDismiss={onDismiss}>
            <Dialog.Header icon={StackIcon} title="Create spellbook" />
            <Box p={3}>
                <Box mb={3}>
                    <TextInput
                        aria-label="Spellbook name"
                        name="spellbok-name"
                        placeholder="Spellbook name"
                        value={name}
                        onChange={onNameChange}
                        width="100%"
                    />
                </Box>
                <Text pb={2} display="block" fontWeight="600">
                    Classes
                </Text>
                <ClassGrid>
                    {playerClasses.map((playerClass) => (
                        <ClassCell
                            key={playerClass}
                            isSelected={isClassSelected(playerClass)}
                            onClick={() => toggleClass(playerClass)}
                        >
                            {capitalizeFirstLetter(playerClass)}
                        </ClassCell>
                    ))}
                </ClassGrid>
                <Box display="flex" mt={3} justifyContent="flex-end">
                    <ButtonPrimary
                        disabled={name.trim().length <= 0}
                        onClick={createSpellbook}
                    >
                        Create
                    </ButtonPrimary>
                </Box>
            </Box>
        </Dialog>
    );
};

const ClassGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 8px;
    height: 240px;
    grid-row-gap: 8px;
    margin-bottom: 16px;
`;

interface ClassCellProps {
    isSelected: boolean;
}

const ClassCell = styled.button<ClassCellProps>`
    display: inline-block;
    text-decoration: none;
    color: inherit;
    background: none;
    padding: 0;
    font: inherit;
    outline: inherit;

    background-color: ${themeGet('colors.canvas.subtle')};
    border: 3px solid transparent;
    border-color: ${({ isSelected }) =>
        isSelected ? themeGet('colors.accent.emphasis') : 'transparent'};
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
`;
