import { Box, Heading, Spinner } from '@primer/components';

export const PageLoading = () => (
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        m={8}
    >
        <Box m={3}>
            <Heading fontSize={3}>Loading…</Heading>
        </Box>
        <Spinner />
    </Box>
);
