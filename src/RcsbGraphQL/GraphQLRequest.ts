import {ApolloQueryResult} from "apollo-client";
import ApolloClient, {PresetConfig} from "apollo-boost";
import * as configBorregoGraphQL from "./ServerConfig/codegen.borrego.json";
import * as configYosemiteGraphQL from "./ServerConfig/codegen.yosemite.json";
import gql from 'graphql-tag';


export class GraphQLRequest {

    private readonly client: ApolloClient<unknown>;

    constructor(api: "yosemite" | "borrego" | string, config?: PresetConfig) {
        switch (api){
            case "yosemite":
                this.client = new ApolloClient({
                    ...config,
                    uri: configYosemiteGraphQL.schema
                });
                break;
            case "borrego":
                this.client = new ApolloClient({
                    ...config,
                    uri: configBorregoGraphQL.schema
                });
                break;
            default:
                this.client = new ApolloClient({
                    ...config,
                    uri: api
                });
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
