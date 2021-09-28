import { Box, TextInput } from '@primer/components';
import { PageHeader } from '../../layout/PageHeader';
import { useEffect, useState } from 'react';
import { SpellCard } from '../../components/spells/SpellCard';
import { PageLoading } from '../../layout/PageLoading';
import { List, ListItem } from '../../components/spells/list/List';
import { LawIcon, SearchIcon } from '@primer/octicons-react';
import { useGetSpells } from '../../gql/SpellRepository';

export const SpellsPage = () => {
    const { data, error, isLoading } = useGetSpells();
    const [ nameFilter, setNameFilter ] = useState('');

    const handleChange = (e: any) => {
        console.log('SET NAME FILTER', nameFilter, e.target.value);
        setNameFilter(e.target.value)
    };

    const lowerFilter = nameFilter.toLowerCase();
    const spells = data?.filter((s) => s.name.toLowerCase().includes(lowerFilter)) || [];

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
                    <>
                        <TextInput
                            sx={{m: 4}}
                            icon={SearchIcon}
                            aria-label="Spell name"
                            name="spell-name"
                            placeholder="Filter spells"
                            value={nameFilter}
                            onChange={handleChange}
                        />
                        <List>
                            {spells.map((spell) => (
                                <ListItem key={spell.name}>
                                    <SpellCard spell={spell}/>
                                </ListItem>
                            ))}
                        </List>
                    </>
                )}
            </Box>
        </>
    );
};
