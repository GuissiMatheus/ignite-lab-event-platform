import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o9a17019fh01z7banbb1w9/master',
    cache: new InMemoryCache()
})