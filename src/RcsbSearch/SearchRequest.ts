import {SearchQuery} from "./Types/SearchQueryInterface";
import {QueryResult} from "./Types/SearchResultInterface";
import * as serverSearch from "./ServerConfig/server.search.json";

export class SearchRequest {
    private readonly uri: string;
    constructor(uri?:string) {
        this.uri = uri ?? (<any>serverSearch).uri;
    }
    public async request(query: SearchQuery): Promise<QueryResult>{
        const response: Response = await fetch(this.uri, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        });
        return await response.json() as QueryResult;
    }
}