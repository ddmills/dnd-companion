import React from 'react';
import { ThemeProvider } from '@primer/components';

interface AppThemeProviderProps {
    children?: React.ReactNode;
}

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => (
    <ThemeProvider colorMode="night" nightScheme="dark_dimmed">
        {children}
    </ThemeProvider>
);
