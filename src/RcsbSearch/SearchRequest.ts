import {SearchQuery} from "./Types/SearchQueryInterface";
import {QueryResult} from "./Types/SearchResultInterface";
import * as serverSearch from "./ServerConfig/codegen.search.json";
import {LocalStorageTools as LST} from "../RcsbLocalStorage/LocalStorageTools";

export class SearchRequest {
    private readonly uri: string;
    private readonly fetch:(input:RequestInfo,init?:RequestInit)=>Promise<Response>;
    constructor(uri?:string, externalFetch?:(input:RequestInfo,init?:RequestInit)=>Promise<Response>) {
        this.uri = uri ?? serverSearch.uri;
        if(typeof externalFetch === "function")
            this.fetch = externalFetch;
        else
            this.fetch = fetch;
        if(!this.fetch)
            throw "ERROR: fetch function was not provided"
    }
    public async request(query: SearchQuery): Promise<QueryResult|null>{
        const localObj: QueryResult | null = LST.getItem<SearchQuery,QueryResult|null>(query);
        if(localObj)
            return localObj;
        const response: Response = await (window?.fetch ?? this.fetch)(this.uri, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
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