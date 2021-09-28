import { Box } from '@primer/components';
import { PageHeader } from '../../layout/PageHeader';
import { useEffect } from 'react';
import { SpellCard } from '../../components/spells/SpellCard';
import { PageLoading } from '../../layout/PageLoading';
import { List, ListItem } from '../../components/spells/list/List';
import { LawIcon } from '@primer/octicons-react';
import { useGetSpells } from '../../gql/SpellRepository';

export const SpellsPage = () => {
    const { data, error, isLoading } = useGetSpells();

    useEffect(() => {
        error && console.error(error);
    }, [error]);

    return (
        <>
            <PageHeader title="Spells" icon={LawIcon} />
            <Box display="flex" flexDirection="column">
                {isLoading ? (
                    <PageLoading />
                ) : (
                    <List>
                        {data?.map((spell) => (
                            <ListItem key={spell.name}>
                                <SpellCard spell={spell} />
                            </ListItem>
                        ))}
                    </List>
                )}
            </Box>
        </>
    );
};
