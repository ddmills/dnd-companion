import React from 'react';
import { BaseStyles, ThemeProvider } from '@primer/components';
import { GraphProvider } from './gql/GraphProvider';
import { Routes } from './pages/Routes';

export const App = () => (
    <ThemeProvider>
        <BaseStyles>
            <GraphProvider>
                <Routes />
            </GraphProvider>
        </BaseStyles>
    </ThemeProvider>
);
