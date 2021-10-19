import { Box, Text, Button, ButtonPrimary } from '@primer/components';
import { PlusIcon, StackIcon } from '@primer/octicons-react';
import { useCallback, useState } from 'react';
import { PageHeader } from '../../layout/PageHeader';
import { useSpellbooks } from '../../contexts/SpellbooksContext';
import { SpellbookCreate } from './SpellbookCreate';
import { SpellbookDelete } from './SpellbookDelete';
import { List, ListItem } from '../../components/spells/list/List';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DeleteButton = styled(Button)`
    font-size: 14px;
    padding: 4px 8px;
    background-color: #373e47;
    border-color: #0f1c29a1;
`;

const SpellbookRow = styled(Box)`
    text-decoration: none;
    color: inherit;
`;

export const SpellbookListPage = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedSpellbook, setSelectedSpellbook] = useState(undefined);
    const { spellbooks } = useSpellbooks();

    const showDeleteSpellbookModal = useCallback(
        (spellbook) => {
            setSelectedSpellbook(spellbook);
            setIsDeleteModalOpen(true);
        },
        [setSelectedSpellbook, setIsDeleteModalOpen]
    );

    return (
        <>
            <PageHeader>
                <PageHeader.Title icon={StackIcon} title="Spellbooks" />
                <PageHeader.Action
                    icon={PlusIcon}
                    label="Create spellbook"
                    onClick={() => setIsCreateModalOpen(true)}
                />
            </PageHeader>
            <Box display="flex" flexDirection="column">
                {spellbooks.length <= 0 && (
                    <Box
                        pt={5}
                        pl={3}
                        pr={3}
                        display="flex"
                        justifyContent="center"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Text pb={5} fontSize={3} color="#3c4147">
                            You have no spellbooks.
                        </Text>
                    </Box>
                )}
                <List>
                    {spellbooks.map((book) => (
                        <ListItem key={book.spellbookId}>
                            <SpellbookRow
                                p={3}
                                as={Link}
                                to={`/spellbook/${book.spellbookId}`}
                                display="block"
                            >
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <Text fontSize={2} fontWeight={600}>
                                        {book.name}
                                    </Text>
                                    <DeleteButton
                                        onClick={(e) => {
                                            console.log('CLICKED BTN');
                                            e.stopPropagation();
                                            e.preventDefault();
                                            showDeleteSpellbookModal(book);
                                        }}
                                    >
                                        Delete
                                    </DeleteButton>
                                </Box>
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <Text fontSize={1} color="#6e7b8a">
                                        {book.spells.length} spells,{' '}
                                        {book.classes.join(', ')}
                                    </Text>
                                </Box>
                            </SpellbookRow>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <SpellbookCreate
                isOpen={isCreateModalOpen}
                onDismiss={() => setIsCreateModalOpen(false)}
            />
            <SpellbookDelete
                spellbook={selectedSpellbook}
                isOpen={isDeleteModalOpen}
                onDismiss={() => {
                    setIsDeleteModalOpen(false);
                    setSelectedSpellbook(undefined);
                }}
            />
        </>
    );
};
