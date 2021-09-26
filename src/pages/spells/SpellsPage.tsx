import { Box } from '@primer/components';
import { ZapIcon } from '@primer/octicons-react';
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
        console.log(data);
    }, [data])

    useEffect(() => {
        console.error(error);
    }, [error])

    return (
        <Box display="flex" flexDirection="column">
            <PageHeader title='Spells' icon={ZapIcon} />
            { loading ? (
                <PageLoading />
            ) : (
                <Box m={2}>
                    {data?.spells.map((spell, idx) => <SpellCard spell={spellWithId(spell, idx)} />)}
                </Box>
            )}
        </Box>
    );
};
