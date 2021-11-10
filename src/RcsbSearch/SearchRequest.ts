import {SearchQuery} from "./Types/SearchQueryInterface";
import {QueryResult} from "./Types/SearchResultInterface";
import * as serverSearch from "./ServerConfig/codegen.search.json";

export class SearchRequest {
    private readonly uri: string;
    constructor(uri?:string) {
        this.uri = uri ?? serverSearch.uri;
    }
    public async request(query: SearchQuery): Promise<QueryResult|null>{
        const response: Response = await fetch(this.uri, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        });
        try {
            return await response.json() as QueryResult;
        }catch (e) {
            console.error(e);
            console.error(response);
            return null;
        }
    }
}