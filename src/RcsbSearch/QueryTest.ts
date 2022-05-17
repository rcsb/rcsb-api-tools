import fetch from "node-fetch";
import {HistogramFacet, SearchQuery, TermsFacet} from "./Types/SearchQueryInterface";
import {QueryResult} from "./Types/SearchResultInterface";
import {CoreEntry} from "../RcsbGraphQL/Types/Yosemite/CorePaths";
import {AggregationType, Operator, ReturnType, Service, Type} from "./Types/SearchEnums";
import {SearchRequest} from "./SearchRequest";
import {RcsbSearchMetadata} from "./Types/SearchMetadata";

const query: SearchQuery = {
    query: {
        type: Type.Terminal,
        service: Service.Text,
        parameters: {
            operator: Operator.Greater,
            value: "1900-01-01",
            attribute: CoreEntry.RcsbAccessionInfo.DepositDate
        }
    },
    request_options: {
        facets: [
            {
                name: `FACET/${RcsbSearchMetadata.Exptl.Method.path}`,
                aggregation_type: AggregationType.Terms,
                attribute: RcsbSearchMetadata.Exptl.Method.path
            },
            {
                name: `FACET/${RcsbSearchMetadata.RcsbPrimaryCitation.RcsbJournalAbbrev.path}`,
                aggregation_type: AggregationType.Terms,
                attribute: RcsbSearchMetadata.RcsbPrimaryCitation.RcsbJournalAbbrev.path
            },
            {
                name: `FACET/${RcsbSearchMetadata.RcsbEntryInfo.DiffrnResolutionHigh.Value.path}`,
                aggregation_type: AggregationType.Histogram,
                attribute: RcsbSearchMetadata.RcsbEntryInfo.DiffrnResolutionHigh.Value.path,
                interval: 0.5,
                min_interval_population: 1
            }
        ]
    },
    return_type: ReturnType.Entry
};
const searchRequest: SearchRequest = new SearchRequest(undefined, fetch as unknown as (input:RequestInfo,init?:RequestInit)=>Promise<Response>);
const request = async ()=>{
    const response: QueryResult|null = await searchRequest.request(query, {"Custom": "1234"});
    console.log(response);
}
request().then(()=>{
    console.log("Search check OK")
    process.exit();
});

