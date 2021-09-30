import { Box } from '@primer/components';
import { StackIcon } from '@primer/octicons-react';
import { PageHeader } from '../../layout/PageHeader';

export const SpellbooksPage = () => {
    return (
        <>
            <PageHeader>
                <PageHeader.Title icon={StackIcon} title="Spellbooks" />
            </PageHeader>
            <Box display="flex" flexDirection="column"></Box>
        </>
    );
};
