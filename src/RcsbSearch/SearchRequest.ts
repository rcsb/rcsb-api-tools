import fetch from "node-fetch";

import {SearchQuery} from "./Types/SearchQueryInterface";
import {QueryResult} from "./Types/SearchResultInterface";
import * as serverSearch from "./ServerConfig/codegen.search.json";
import {LocalStorageTools as LST} from "../RcsbLocalStorage/LocalStorageTools";

export class SearchRequest {
    private readonly uri: string;
    private readonly fetch:(input:RequestInfo,init?:RequestInit)=>Promise<Response>;
    private readonly requestConfig: RequestInit;
    constructor(uri?:string, externalFetch?:(input:RequestInfo,init?:RequestInit)=>Promise<Response>, requestConfig?: RequestInit) {
        this.uri = uri ?? serverSearch.uri;
        this.requestConfig =  {
            headers:{
                'Content-Type': 'application/json'
            },
            ...(requestConfig ?? {})
        };
        if(typeof externalFetch === "function")
            this.fetch = externalFetch;
        else
            this.fetch = globalThis.window?.fetch ?? fetch;
        if(!this.fetch)
            throw "ERROR: fetch function was not provided"
    }
    public async request(query: SearchQuery, headers: HeadersInit = {}): Promise<QueryResult|null>{
        const localObj: QueryResult | null = LST.getItem<SearchQuery,QueryResult|null>(query);
        if(localObj)
            return localObj;
        //TODO this fetch call is needed to avoid the error [TypeError: 'fetch' called on an object that does not implement interface Window.]
        const response: Response = await (globalThis.window?.fetch ?? this.fetch)(this.uri, {
            ...this.requestConfig,
            method: 'POST',
            body: JSON.stringify(query),
            headers: {
                ...this.requestConfig.headers,
                ...headers
            }
        });
        try {
            const queryResult: QueryResult = await response.json() as QueryResult;
            LST.setItem<SearchQuery,QueryResult>(query,queryResult);
            return queryResult;
        }catch (e) {
            console.error(e);
            console.error(response);
            return null;
        }
    }
}