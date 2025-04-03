import { SearchQuery } from "./Types/SearchQueryInterface";
import { QueryResult } from "./Types/SearchResultInterface";
export declare class SearchRequest {
    private readonly uri;
    private readonly fetch;
    private readonly requestConfig;
    constructor(uri?: string, externalFetch?: (input: RequestInfo, init?: RequestInit) => Promise<Response>, requestConfig?: RequestInit);
    request(query: SearchQuery, headers?: HeadersInit): Promise<QueryResult | null>;
}
