import React from 'react';
import { BaseStyles, Box } from '@primer/components';
import { GraphProvider } from './gql/GraphProvider';
import { Routes } from './pages/Routes';
import { AppThemeProvider } from './layout/AppThemeProvider';
import styled from 'styled-components';
import { SpellSearchProvider } from './pages/spells/SpellSearchContext';

const Base = styled(BaseStyles)`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    position: relative;
`;

export const App = () => (
    <AppThemeProvider>
        <GraphProvider>
            <SpellSearchProvider>
                <Box height="100%" bg="bg.primary" overflowY="auto">
                    <Base>
                        <Routes />
                    </Base>
                </Box>
            </SpellSearchProvider>
        </GraphProvider>
    </AppThemeProvider>
);
