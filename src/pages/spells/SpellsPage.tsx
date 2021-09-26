import { Box, ButtonPrimary } from '@primer/components';
import { ZapIcon } from '@primer/octicons-react';
import { PageHeader } from '../../layout/PageHeader';

export const SpellsPage = () => {
    return (
        <>
            <PageHeader title='Spells' icon={ZapIcon} />
            <Box m={2}>
                <ButtonPrimary>Fetch</ButtonPrimary>
                <p>This will get Primer text styles.</p>
            </Box>
        </>
    );
};
