import React from 'react';
import { BaseStyles, Box } from '@primer/components';
import { GraphProvider } from './gql/GraphProvider';
import { Routes } from './pages/Routes';
import { AppThemeProvider } from './layout/AppThemeProvider';

export const App = () => (
    <AppThemeProvider>
        <GraphProvider>
            <Box height="100%" bg="bg.primary" overflowY="auto">
                <BaseStyles>
                    <Routes />
                </BaseStyles>
            </Box>
        </GraphProvider>
    </AppThemeProvider>
);
