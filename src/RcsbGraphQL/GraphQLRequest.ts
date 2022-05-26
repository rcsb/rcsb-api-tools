import { GraphQLClient } from 'graphql-request'
import {RequestInit} from "graphql-request/src/types.dom";

import * as configBorregoGraphQL from "./ServerConfig/codegen.borrego.json";
import * as configYosemiteGraphQL from "./ServerConfig/codegen.yosemite.json";
import {LocalStorageTools as LST} from "../RcsbLocalStorage/LocalStorageTools"


export class GraphQLRequest {

    private readonly client: GraphQLClient;

    constructor(api: "data-api" | "1d-coordinates" | string, config?: RequestInit) {
        switch (api){
            case "data-api":
                this.client = new GraphQLClient(configYosemiteGraphQL.schema, config);
                break;
            case "1d-coordinates":
                this.client = new GraphQLClient(configBorregoGraphQL.schema, config);
                break;
            default:
                this.client = new GraphQLClient(api, config);
                break;
        }
    }

    public async request<Q,R>(requestConfig: Q, query: string, headers?: HeadersInit): Promise<R> {
        const localObj: R | null = LST.getItem<{query:string;requestConfig:Q},R>({query,requestConfig});
        if(localObj)
            return localObj;
        try {
            const result: R = await this.client.request<R>(
                query,
                requestConfig,
                headers
            );
            LST.setItem<{query:string;requestConfig:Q},R>({query,requestConfig},result);
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}
