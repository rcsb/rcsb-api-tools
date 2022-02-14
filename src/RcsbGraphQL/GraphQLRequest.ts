import {
    ApolloQueryResult,
    ApolloClient,
    createHttpLink,
    ApolloClientOptions,
    HttpOptions,
    InMemoryCache,
    NormalizedCacheObject
} from "@apollo/client";
import * as configBorregoGraphQL from "./ServerConfig/codegen.borrego.json";
import * as configYosemiteGraphQL from "./ServerConfig/codegen.yosemite.json";
import gql from 'graphql-tag';


export class GraphQLRequest {

    private readonly client: ApolloClient<unknown>;

    constructor(api: "yosemite" | "borrego" | string, httpOptions?: HttpOptions, apolloClientOptions?: ApolloClientOptions<NormalizedCacheObject>) {
        switch (api){
            case "yosemite":
                this.client = new ApolloClient({
                    link: createHttpLink({uri:configYosemiteGraphQL.schema, ...httpOptions}),
                    cache: new InMemoryCache(),
                    ...apolloClientOptions
                });
                break;
            case "borrego":
                this.client = new ApolloClient({
                    link: createHttpLink({uri:configBorregoGraphQL.schema, ...httpOptions}),
                    cache: new InMemoryCache(),
                    ...apolloClientOptions
                });
                break;
            default:
                this.client = new ApolloClient({
                    link: createHttpLink({uri:api, ...httpOptions}),
                    cache: new InMemoryCache(),
                    ...apolloClientOptions
                });
                break;
        }
    }

    public async request<Q,R>(requestConfig: Q, query: string): Promise<R> {
        try {
            const alignment: ApolloQueryResult<R> = await this.client.query<R>({
                query: gql(query),
                variables: {
                    ...requestConfig
                }
            });
            return alignment.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}
