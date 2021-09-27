import { Box, Flash, Heading, StyledOcticon, Text } from '@primer/components';
import { AlertIcon, BookmarkFillIcon } from '@primer/octicons-react';
import { PageHeader } from '../../layout/PageHeader';
import { useGetSpellByNameQuery } from '../../generated/graphql';
import { useEffect } from 'react';
import { PageLoading } from '../../layout/PageLoading';
import { useParams } from 'react-router';

interface SpellPageParams {
    spellName: string
}

const renderPart = (label?: string, value?: string) => {
    if (!value) {
        return;
    }

    return (
        <Box>
            <Text fontWeight="bold" display="inline">{label}:</Text>
            <Text display="inline"> {value}</Text>
        </Box>
    )
};

export const SpellPage = () => {
    const { spellName } = useParams<SpellPageParams>();

    const { data, error, loading } = useGetSpellByNameQuery({
        variables: {
            name: spellName
        }
    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    const notFound = !loading && !data?.spell;

    return (
        <Box display="flex" flexDirection="column">
            <PageHeader title={spellName} icon={BookmarkFillIcon} />
            { loading ? (
                <PageLoading />
            ) : (
                <Box display="flex" flexDirection="column" mt={3} ml={4} mr={4} mb={4}>
                    { notFound ? (
                        <Flash variant="warning">
                            <StyledOcticon icon={AlertIcon} />
                            <Text fontWeight={400}>Spell not found</Text>
                        </Flash>
                    ) : (
                        <>
                            <Heading fontSize={3} mb={3}>
                                Level {data?.spell?.level} {data?.spell?.school?.name?.toLowerCase()}
                            </Heading>
                            {renderPart('Casting time', data?.spell?.casting_time?.toString())}
                            {renderPart('Range', data?.spell?.attack_type?.toString())}
                            {renderPart('Components', data?.spell?.components?.join(', '))}
                            {renderPart('Concentration', data?.spell?.concentration ? 'yes' : 'no')}
                            {renderPart('Ritual', data?.spell?.ritual ? 'yes' : 'no')}
                            {renderPart('School', data?.spell?.school?.name?.toLowerCase())}
                            <Box display="flex" flexDirection="column" mt={4} mb={4}>
                                {data?.spell?.desc?.map((desc) => (
                                    <Text mb={2}>
                                        {desc}
                                    </Text>
                                ))}
                            </Box>

                            {data?.spell?.higher_level?.length! > 0 && (
                                <>
                                    <Text fontWeight="bold" display="inline">Higher level:</Text>
                                    <Box display="flex" flexDirection="column" mt={2} mb={4}>
                                        {data?.spell?.higher_level?.map((desc) => (
                                            <Text mb={2}>
                                                {desc}
                                            </Text>
                                        ))}
                                    </Box>
                                </>
                            )}
                        </>
                    )}
                </Box>
            )}
        </Box>
    );
};
