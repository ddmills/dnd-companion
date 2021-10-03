import { Box, Text } from '@primer/components';
import { PlusIcon, StackIcon } from '@primer/octicons-react';
import { useState } from 'react';
import { PageHeader } from '../../layout/PageHeader';
import { useSpellbooks } from '../../contexts/SpellbooksContext';
import { SpellbookCreate } from './SpellbookCreate';
import { List, ListItem } from '../../components/spells/list/List';

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
                <List>
                    {spellbooks.map((book) => (
                        <ListItem key={book.spellbookId}>
                            <Box p={3}>
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <Text fontSize={2} fontWeight={600}>
                                        {book.name}
                                    </Text>
                                    <Text fontSize={1} color="#6e7b8a">
                                        {book.spellNames.length} spells
                                    </Text>
                                </Box>
                                <Box>
                                    <Text fontSize={1} color="#6e7b8a">
                                        {book.classes.join(', ')}
                                    </Text>
                                </Box>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <SpellbookCreate
                isOpen={isModalOpen}
                onDismiss={() => setIsModalOpen(false)}
            />
        </>
    );
};
