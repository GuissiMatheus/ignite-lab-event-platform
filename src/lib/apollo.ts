import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

/**
 * Remoção de Cache para solucionar o loading infinito entre os vídeos
 */
const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore",
    },
    query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
    },
};

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o9a17019fh01z7banbb1w9/master',
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
})