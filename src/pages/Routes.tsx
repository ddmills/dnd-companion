import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppHeader } from '../layout/AppHeader';
import { HomePage } from './home/HomePage';
import { SpellPage } from './spells/SpellPage';
import { SpellsPage } from './spells/SpellsPage';

export const Routes = () => (
    <BrowserRouter>
        <AppHeader />
        <Switch>
            <Route path="/spells">
                <SpellsPage />
            </Route>
            <Route path="/spell/:spellName">
                <SpellPage />
            </Route>
            <Route>
                <HomePage />
            </Route>
        </Switch>
    </BrowserRouter>
);
