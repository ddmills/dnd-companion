import { Box, TextInput } from '@primer/components';
import { PageHeader } from '../../layout/PageHeader';
import { useEffect, useState } from 'react';
import { PageLoading } from '../../layout/PageLoading';
import { RepoIcon, SearchIcon } from '@primer/octicons-react';
import { useGetSpells } from '../../gql/SpellRepository';
import { InfiniteSpellList } from './InfiniteSpellList';
import { Drawer } from '../../components/Drawer';
import { SpellsListFilter } from './SpellsListFilter';

export const SpellsPage = () => {
    const { data, error, isLoading } = useGetSpells();
    const [nameFilter, setNameFilter] = useState('');
    const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

    const handleChange = (e: any) => {
        setNameFilter(e.target.value);
    };

    const lowerFilter = nameFilter.toLowerCase();
    const spells =
        data?.filter((s) => s.name.toLowerCase().includes(lowerFilter)) || [];

    useEffect(() => {
        error && console.error(error);
    }, [error]);

    const showFilter = () => {
        setIsFilterDrawerOpen(true);
    };

    const hideDrawer = () => {
        setIsFilterDrawerOpen(false);
    };

    return (
        <>
            <PageHeader>
                <PageHeader.Title icon={RepoIcon} title="Spells" />
                <PageHeader.Action icon={SearchIcon} label="search" onClick={showFilter} />
            </PageHeader>
            <Box
                display="flex"
                flexDirection="column"
                flex="1 1 auto"
                height="100%"
            >
                {isLoading ? (
                    <PageLoading />
                ) : (
                    <>
                        <TextInput
                            sx={{ m: 4 }}
                            icon={SearchIcon}
                            aria-label="Spell name"
                            name="spell-name"
                            placeholder="Filter spells"
                            value={nameFilter}
                            onChange={handleChange}
                        />
                        <InfiniteSpellList spells={spells} />
                        <Drawer isOpen={isFilterDrawerOpen} handleClose={hideDrawer}>
                            <SpellsListFilter handleClose={hideDrawer} />
                        </Drawer>
                    </>
                )}
            </Box>
        </>
    );
};
