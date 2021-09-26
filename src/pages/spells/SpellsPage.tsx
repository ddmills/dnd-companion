import { Box } from '@primer/components';
import { PageHeader } from '../../layout/PageHeader';
import { Spell, useGetSpellsQuery } from '../../generated/graphql';
import { useEffect } from 'react';
import { SpellCard } from '../../components/spells/SpellCard';
import { PageLoading } from '../../layout/PageLoading';

const spellWithId = (spell: any, idx: number) : Spell => ({
    ...spell,
    _id: idx.toString(),
});

export const SpellsPage = () => {
    const { data, error, loading } = useGetSpellsQuery();

    useEffect(() => {
        console.error(error);
    }, [error])

    return (
        <>
            <PageHeader title='Spells' />
            <Box display="flex" flexDirection="column" m={2}>
                { loading ? (
                    <PageLoading />
                ) : (
                    <Box>
                        {data?.spells.map((spell, idx) => <SpellCard spell={spellWithId(spell, idx)} />)}
                    </Box>
                )}
            </Box>
        </>
    );
};
