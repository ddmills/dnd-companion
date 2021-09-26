import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { AppHeader } from '../layout/AppHeader';
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
                <Link to="/spells">Spells</Link>
            </Route>
        </Switch>
    </BrowserRouter>
);
