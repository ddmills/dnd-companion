import { Box, TextInput, useTheme } from '@primer/components';
import { PageHeader } from '../../layout/PageHeader';
import { useCallback, useEffect, useState } from 'react';
import { PageLoading } from '../../layout/PageLoading';
import { RepoIcon, SearchIcon } from '@primer/octicons-react';
import { useGetSpells } from '../../gql/SpellRepository';
import { InfiniteSpellList } from './InfiniteSpellList';
import { Drawer } from '../../components/Drawer';
import { SpellsListFilter } from './SpellsListFilter';
import { useSpellSearch } from './SpellSearchContext';

export const SpellsPage = () => {
    const { data, error, isLoading } = useGetSpells();
    const filter = useSpellSearch();
    const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
    const spells = filter.apply(data).sort((s1, s2) => s1.level - s2.level);
    const { theme } = useTheme();

    useEffect(() => {
        error && console.error(error);
    }, [error]);

    const handleTextFilterChange = useCallback(
        (e: any) => {
            filter.setTextFilter(e.target.value);
        },
        [filter]
    );

    const showFilter = useCallback(() => {
        setIsFilterDrawerOpen(true);
    }, [setIsFilterDrawerOpen]);

    const hideDrawer = useCallback(() => {
        setIsFilterDrawerOpen(false);
    }, [setIsFilterDrawerOpen]);

    return (
        <>
            <PageHeader>
                <PageHeader.Title icon={RepoIcon} title="Spells" />
                <PageHeader.Action
                    icon={SearchIcon}
                    label="search"
                    onClick={showFilter}
                    color={
                        filter.hasFilter()
                            ? theme?.colors.accent.emphasis
                            : 'inherit'
                    }
                />
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
                            placeholder="Search spells"
                            value={filter.textFilter}
                            onChange={handleTextFilterChange}
                        />
                        <InfiniteSpellList spells={spells} />
                        <Drawer
                            isOpen={isFilterDrawerOpen}
                            handleClose={hideDrawer}
                        >
                            <SpellsListFilter handleClose={hideDrawer} />
                        </Drawer>
                    </>
                )}
            </Box>
        </>
    );
};
