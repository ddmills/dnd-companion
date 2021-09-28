import React from 'react';
import { BaseStyles, Box } from '@primer/components';
import { GraphProvider } from './gql/GraphProvider';
import { Routes } from './pages/Routes';
import { AppThemeProvider } from './layout/AppThemeProvider';
import styled from 'styled-components';

const Base = styled(BaseStyles)`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const App = () => (
    <AppThemeProvider>
        <GraphProvider>
            <Box height="100%" bg="bg.primary" overflowY="auto">
                <Base>
                    <Routes />
                </Base>
            </Box>
        </GraphProvider>
    </AppThemeProvider>
);
