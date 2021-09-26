import React from 'react';
import { BaseStyles, Box, Heading, ThemeProvider } from '@primer/components';
import { PageHeader } from './layout/PageHeader';

const App = () => (
    <ThemeProvider>
        <BaseStyles>
            <PageHeader />
            <Box m={4}>
                <Heading mb={2}>Hello, world!</Heading>
                <p>This will get Primer text styles.</p>
            </Box>
        </BaseStyles>
    </ThemeProvider>
);

export default App;
