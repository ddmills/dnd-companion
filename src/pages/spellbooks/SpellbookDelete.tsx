import { Box, Text, Button, ButtonDanger } from '@primer/components';
import { TrashIcon } from '@primer/octicons-react';
import { useCallback } from 'react';
import { Dialog } from '../../components/Dialog';
import { useSpellbooks } from '../../contexts/SpellbooksContext';
import { Spellbook } from '../../models/Spellbook';

interface SpellbookDeleteProps {
    isOpen: boolean;
    spellbook?: Spellbook;
    onDismiss: () => void;
}

export const SpellbookDelete = ({
    isOpen,
    onDismiss,
    spellbook,
}: SpellbookDeleteProps) => {
    const { deleteSpellbook } = useSpellbooks();

    const doDelete = useCallback(() => {
        if (spellbook) {
            deleteSpellbook(spellbook);
        }
        onDismiss();
    }, [spellbook, onDismiss, deleteSpellbook]);

    return (
        <Dialog isOpen={isOpen} onDismiss={onDismiss}>
            <Dialog.Header icon={TrashIcon} title="Delete spellbook" />
            <Box p={3}>
                <Text pb={2} display="block" fontWeight="600">
                    Are you sure you want to delete "{spellbook?.name}"
                    spellbook?
                </Text>
                <Box display="flex" mt={3} justifyContent="flex-end">
                    <Button onClick={onDismiss} mr={2}>
                        Cancel
                    </Button>
                    <ButtonDanger onClick={doDelete}>Delete</ButtonDanger>
                </Box>
            </Box>
        </Dialog>
    );
};
