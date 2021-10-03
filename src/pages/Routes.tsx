import { Box } from '@primer/components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppHeader } from '../layout/AppHeader';
import { HomePage } from './home/HomePage';
import { SpellbookListPage } from './spellbooks/SpellbookListPage';
import { SpellPage } from './spells/SpellPage';
import { SpellListPage } from './spells/SpellListPage';
import { SpellbookPage } from './spellbooks/SpellbookPage';

export const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppHeader />
        <Box
            display="flex"
            flexDirection="column"
            overflowY="auto"
            height="100%"
        >
            <Switch>
                <Route path="/spells">
                    <SpellListPage />
                </Route>
                <Route path="/spell/:spellName">
                    <SpellPage />
                </Route>
                <Route path="/spellbooks">
                    <SpellbookListPage />
                </Route>
                <Route path="/spellbook/:spellbookId/add">
                    <SpellListPage />
                </Route>
                <Route path="/spellbook/:spellbookId">
                    <SpellbookPage />
                </Route>
                <Route>
                    <HomePage />
                </Route>
            </Switch>
        </Box>
    </BrowserRouter>
);
