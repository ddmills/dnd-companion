import React from 'react';
import { BaseStyles, ThemeProvider } from '@primer/components';
import { AppHeader } from './layout/AppHeader';
import { SpellsPage } from './pages/spells/SpellsPage';
import { GraphProvider } from './gql/GraphProvider';

export const App = () => (
    <ThemeProvider>
        <BaseStyles>
            <GraphProvider>
                <AppHeader />
                <SpellsPage />
            </GraphProvider>
        </BaseStyles>
    </ThemeProvider>
);
