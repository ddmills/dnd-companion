import { Box, Text, Button, ButtonPrimary } from '@primer/components';
import { PlusIcon, StackIcon } from '@primer/octicons-react';
import { useState } from 'react';
import { PageHeader } from '../../layout/PageHeader';
import { useSpellbooks } from '../../contexts/SpellbooksContext';
import { SpellbookCreate } from './SpellbookCreate';
import { List, ListItem } from '../../components/spells/list/List';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SpellbookRow = styled(Box)`
    text-decoration: none;
    color: inherit;
`;

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
                                    <Text fontSize={1} color="#6e7b8a">
                                        {book.spells.length} spells
                                    </Text>
                                </Box>
                                <Box>
                                    <Text fontSize={1} color="#6e7b8a">
                                        {book.classes.join(', ')}
                                    </Text>
                                </Box>
                            </SpellbookRow>
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
