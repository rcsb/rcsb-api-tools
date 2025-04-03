import { GraphQLClient } from "graphql-request";
export type RequestConfig = ConstructorParameters<typeof GraphQLClient>[1];
export declare class GraphQLRequest {
    private readonly client;
    constructor(api: "data-api" | "1d-coordinates" | "sequence-coordinates" | string, config?: RequestConfig);
    request<Q, R>(requestConfig: Q, query: string, headers?: HeadersInit): Promise<R>;
}
