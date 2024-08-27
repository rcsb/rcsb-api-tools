import {SearchRequest} from "../src/RcsbSearch/SearchRequest";
import {QueryResult} from "../src/RcsbSearch/Types/SearchResultInterface";
import {FACET_QUERY} from "./Queries/SearchApi/FacetQuery";

describe('Testing Search API request', ()=>{

    const searchApiClient: SearchRequest = new SearchRequest(undefined, fetch);

    test('Test Search API facets', async ()=>{

        const response: QueryResult | null = await searchApiClient.request(FACET_QUERY, {"Custom": "1234"});
        expect(response).toBeDefined();
        expect(response?.total_count).toBeGreaterThan(200000);
        expect(response?.result_set?.length).toBeGreaterThan(0);
        response?.result_set?.forEach(r=>{
            expect(r).toHaveProperty('identifier');
        });
        expect(response?.facets?.length).toBeGreaterThan(0);
        response?.facets?.forEach(f=>{
            expect(f.name).toBeDefined();
        });
    });

});

