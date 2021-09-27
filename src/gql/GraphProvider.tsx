import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://www.dnd5eapi.co/graphql',
    cache: new InMemoryCache(),
});

interface GraphProviderProps {
    children?: React.ReactNode;
}

export const GraphProvider = ({ children }: GraphProviderProps) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);
