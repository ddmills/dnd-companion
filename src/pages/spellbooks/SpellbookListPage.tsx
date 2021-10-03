import { Box, Text } from '@primer/components';
import { PlusIcon, StackIcon } from '@primer/octicons-react';
import { useState } from 'react';
import { PageHeader } from '../../layout/PageHeader';
import { useSpellbooks } from '../../contexts/SpellbooksContext';
import { SpellbookCreate } from './SpellbookCreate';

export const SpellbookListPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { spellbooks } = useSpellbooks();

    return (
        <>
            <PageHeader>
                <PageHeader.Title icon={StackIcon} title="Spellbooks" />
                <PageHeader.Action
                    icon={PlusIcon}
                    label="Create spellbook"
                    onClick={() => setIsModalOpen(true)}
                />
            </PageHeader>
            <Box display="flex" flexDirection="column">
                {spellbooks.map((book) => (
                    <Text key={book.spellbookId}>{book.name}</Text>
                ))}
            </Box>
            <SpellbookCreate
                isOpen={isModalOpen}
                onDismiss={() => setIsModalOpen(false)}
            />
        </>
    );
};
