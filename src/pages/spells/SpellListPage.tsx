import { Box, useTheme } from '@primer/components';
import { PageHeader } from '../../layout/PageHeader';
import { useCallback, useEffect, useState } from 'react';
import { PageLoading } from '../../layout/PageLoading';
import { RepoIcon, SearchIcon } from '@primer/octicons-react';
import { useGetSpells } from '../../models/SpellRepository';
import { InfiniteSpellList } from './InfiniteSpellList';
import { Drawer } from '../../components/Drawer';
import { SpellsListFilter } from './SpellsListFilter';
import { useSpellSearch } from '../../contexts/SpellSearchContext';
import { useSpellbook } from '../../contexts/SpellbooksContext';

export const SpellListPage = () => {
    const { data, error, isLoading } = useGetSpells();
    const spellbook = useSpellbook();
    const filter = useSpellSearch();
    const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
    const spells = filter.apply(data).sort((s1, s2) => s1.level - s2.level);
    const { theme } = useTheme();

    useEffect(() => {
        error && console.error(error);
    }, [error]);

    useEffect(() => {
        if (spellbook) {
            filter.setClassFilter(spellbook.classes);
        } else {
            filter.clear();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [spellbook]);

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
                        <InfiniteSpellList spells={spells} />
                        <Drawer
                            isOpen={isFilterDrawerOpen}
                            onDismiss={hideDrawer}
                        >
                            <SpellsListFilter onDismiss={hideDrawer} />
                        </Drawer>
                    </>
                )}
            </Box>
        </>
    );
};
