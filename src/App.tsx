import React from 'react';
import { BaseStyles, ThemeProvider } from '@primer/components';
import { AppHeader } from './layout/AppHeader';
import { SpellsPage } from './pages/spells/SpellsPage';

export const App = () => (
    <ThemeProvider>
        <BaseStyles>
            <AppHeader />
            <SpellsPage />
        </BaseStyles>
    </ThemeProvider>
);
