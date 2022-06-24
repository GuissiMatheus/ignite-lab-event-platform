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
    uri: import.meta.env.VITE_API_URL,
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
    },
    cache: new InMemoryCache(),

    /**
     * Remoção de Cache para solucionar o loading infinito entre os vídeos
     */
    defaultOptions: defaultOptions
})