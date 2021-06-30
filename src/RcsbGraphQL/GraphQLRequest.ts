import {ApolloQueryResult} from "apollo-client";
import ApolloClient, {DocumentNode} from "apollo-boost";
import * as configBorregoGraphQL from "./ServerConfig/codegen.borrego.json";
import * as configYosemiteGraphQL from "./ServerConfig/codegen.yosemite.json";


export class RcsbQueryAlignment {

    private static readonly client = {
        "borrego": new ApolloClient({
            uri: (<any>configBorregoGraphQL).schema
        }),
        "yosemite": new ApolloClient({
            uri: (<any>configYosemiteGraphQL).schema
        })
    }

    public async request<Q,R>(requestConfig: Q, query: DocumentNode, api: "yosemite" | "borrego"): Promise<R> {
        try {
            const alignment: ApolloQueryResult<R> = await RcsbQueryAlignment.client[api].query<R>({
                query: query,
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
