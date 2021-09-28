import { Box } from '@primer/components';
import { StackIcon } from '@primer/octicons-react';
import { PageHeader } from '../../layout/PageHeader';

export const SpellbooksPage = () => {
    return (
        <>
            <PageHeader title="Spellbooks" icon={StackIcon} />
            <Box display="flex" flexDirection="column"></Box>
        </>
    );
};
