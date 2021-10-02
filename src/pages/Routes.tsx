import { Box } from '@primer/components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppHeader } from '../layout/AppHeader';
import { HomePage } from './home/HomePage';
import { SpellbooksPage } from './spellbooks/SpellbooksPage';
import { SpellPage } from './spells/SpellPage';
import { SpellsPage } from './spells/SpellsPage';

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
                    <SpellsPage />
                </Route>
                <Route path="/spell/:spellName">
                    <SpellPage />
                </Route>
                <Route path="/spellbooks">
                    <SpellbooksPage />
                </Route>
                <Route>
                    <HomePage />
                </Route>
            </Switch>
        </Box>
    </BrowserRouter>
);
