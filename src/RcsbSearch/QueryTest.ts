import fetch from "node-fetch";
import {SearchQuery} from "./Types/SearchQueryInterface";
import {QueryResult} from "./Types/SearchResultInterface";
import {CoreEntry} from "../RcsbGraphQL/Types/Yosemite/CorePaths";
import {AggregationType, Operator, ReturnType, Service, Type} from "./Types/SearchEnums";
import {SearchRequest} from "./SearchRequest";

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
                aggregation_type: AggregationType.Terms,
                attribute: CoreEntry.Exptl.Method
            },
            {
                aggregation_type: AggregationType.Terms,
                attribute: CoreEntry.RcsbPrimaryCitation.RcsbJournalAbbrev
            },
            {
                aggregation_type: AggregationType.Histogram,
                attribute: CoreEntry.RcsbEntryInfo.DiffrnResolutionHigh.Value,
                interval: 0.5,
                min_interval_population: 1
            }
        ]
    },
    return_type: ReturnType.Entry
};
const searchRequest: SearchRequest = new SearchRequest(undefined, fetch as unknown as (input:RequestInfo,init?:RequestInit)=>Promise<Response>);
const request = async ()=>{
    const response: QueryResult|null = await searchRequest.request(query);
    console.log(response);
}
request().then(()=>{
    console.log("Search check OK")
    process.exit();
});

