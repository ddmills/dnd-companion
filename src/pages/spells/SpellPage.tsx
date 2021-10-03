import { Box, Flash, Heading, StyledOcticon, Text } from '@primer/components';
import { AlertIcon, BookmarkFillIcon } from '@primer/octicons-react';
import { PageHeader } from '../../layout/PageHeader';
import { useEffect } from 'react';
import { PageLoading } from '../../layout/PageLoading';
import { useParams } from 'react-router';
import { useGetSpellByName } from '../../models/SpellRepository';
import { getSpellSchoolColor } from '../../util/LevelStringFriendly';

interface SpellPageParams {
    spellName: string;
}

const renderPart = (label?: string, value?: string) => {
    if (!value) {
        return;
    }

    return (
        <Box>
            <Text fontWeight="bold" display="inline">
                {label}:
            </Text>
            <Text display="inline"> {value}</Text>
        </Box>
    );
};

const isSpellMinorHeading = (text: string): boolean => {
    return text.length < 24 && !text.startsWith('-') && text.endsWith('.');
};

export const SpellPage = () => {
    const { spellName: encodedSpellName } = useParams<SpellPageParams>();
    const spellName = decodeURIComponent(encodedSpellName);

    const { data, error, isLoading } = useGetSpellByName(spellName);

    useEffect(() => {
        error && console.error(error);
    }, [error]);

    const notFound = !isLoading && !data;

    return (
        <Box display="flex" flexDirection="column">
            <PageHeader>
                <PageHeader.Title icon={BookmarkFillIcon} title={spellName} />
            </PageHeader>
            {isLoading ? (
                <PageLoading />
            ) : (
                <Box
                    display="flex"
                    flexDirection="column"
                    mt={3}
                    ml={4}
                    mr={4}
                    mb={4}
                >
                    {notFound ? (
                        <Flash variant="danger">
                            <StyledOcticon icon={AlertIcon} />
                            <Text fontWeight={400}>Spell not found</Text>
                        </Flash>
                    ) : (
                        <>
                            <Heading
                                fontSize={3}
                                mb={3}
                                color={getSpellSchoolColor(data?.school)}
                            >
                                Level {data?.level}{' '}
                                <Text>{data?.school?.toLowerCase()}</Text>
                            </Heading>
                            {renderPart('Casting time', data?.castingTime)}
                            {renderPart('Duration', data?.duration)}
                            {renderPart('Range', data?.range)}
                            {renderPart(
                                'Components',
                                data?.components?.join(', ')
                            )}
                            {renderPart(
                                'Concentration',
                                data?.concentration ? 'yes' : 'no'
                            )}
                            {renderPart('Ritual', data?.ritual ? 'yes' : 'no')}
                            {renderPart('Classes', data?.classes.join(', '))}

                            <Box
                                display="flex"
                                flexDirection="column"
                                mt={3}
                                mb={3}
                            >
                                {data?.desc?.map((desc, idx) => (
                                    <Text
                                        mb={2}
                                        key={idx}
                                        fontWeight={
                                            isSpellMinorHeading(desc)
                                                ? 700
                                                : 400
                                        }
                                    >
                                        {desc}
                                    </Text>
                                ))}
                            </Box>

                            {data?.higherLevelDesc?.length! > 0 && (
                                <>
                                    <Text fontWeight="bold" display="inline">
                                        Higher level:
                                    </Text>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        mt={2}
                                        mb={4}
                                    >
                                        {data?.higherLevelDesc?.map(
                                            (desc, idx) => (
                                                <Text mb={2} key={idx}>
                                                    {desc}
                                                </Text>
                                            )
                                        )}
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
