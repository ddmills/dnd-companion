import { Box } from '@primer/components';
import { PageHeader } from '../../layout/PageHeader';
import { Spell, useGetSpellsQuery } from '../../generated/graphql';
import { useEffect } from 'react';
import { SpellCard } from '../../components/spells/SpellCard';
import { PageLoading } from '../../layout/PageLoading';
import { List, ListItem } from '../../components/spells/list/List';
import { LawIcon } from '@primer/octicons-react';

const spellWithId = (spell: any, idx: number): Spell => ({
    ...spell,
    _id: idx.toString(),
});

export const SpellsPage = () => {
    const { data, error, loading } = useGetSpellsQuery();

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <>
            <PageHeader title="Spells" icon={LawIcon} />
            <Box display="flex" flexDirection="column">
                {loading ? (
                    <PageLoading />
                ) : (
                    <List>
                        {data?.spells.map((spell, idx) => (
                            <ListItem>
                                <SpellCard spell={spellWithId(spell, idx)} />
                            </ListItem>
                        ))}
                    </List>
                )}
            </Box>
        </>
    );
};
