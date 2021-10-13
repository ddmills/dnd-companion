import { Box, Flash, StyledOcticon, Text } from '@primer/components';
import { AlertIcon, PlusIcon, RepoIcon } from '@primer/octicons-react';
import { useCallback } from 'react';
import { useHistory, useParams } from 'react-router';
import { useSpellbooks } from '../../contexts/SpellbooksContext';
import { PageHeader } from '../../layout/PageHeader';
import { SpellRow } from '../spells/SpellRow';

interface SpellbookPageParams {
    spellbookId: string;
}

export const SpellbookPage = () => {
    const { spellbookId } = useParams<SpellbookPageParams>();
    const { getSpellbookById } = useSpellbooks();
    const history = useHistory();
    const spellbook = getSpellbookById(spellbookId);

    const goToAddSpellsPage = useCallback(() => {
        history.push(`/spellbook/${spellbookId}/add`);
    }, [history, spellbookId]);

    return (
        <Box display="flex" flexDirection="column">
            <PageHeader>
                <PageHeader.Title
                    icon={RepoIcon}
                    title={spellbook?.name ?? 'Unknown'}
                />
                <PageHeader.Action
                    icon={PlusIcon}
                    label="Add spell"
                    onClick={goToAddSpellsPage}
                />
            </PageHeader>
            <Box
                display="flex"
                flexDirection="column"
                flex="1 1 auto"
                overflow="auto"
            >
                {spellbook ? (
                    <Box>
                        {spellbook.spells.map((spell) => (
                            <SpellRow key={spell.name} spell={spell} />
                        ))}
                    </Box>
                ) : (
                    <Flash variant="danger">
                        <StyledOcticon icon={AlertIcon} />
                        <Text fontWeight={400}>
                            Spellbook "{spellbookId}" not found
                        </Text>
                    </Flash>
                )}
            </Box>
        </Box>
    );
};
