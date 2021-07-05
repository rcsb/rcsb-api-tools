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

const searchRequest: SearchRequest = new SearchRequest();
const result: Promise<QueryResult> = searchRequest.request(query);
result.then((response)=>{
    response.drilldown!.filter(dd=>dd.attribute===CoreEntry.RcsbPrimaryCitation.RcsbJournalAbbrev)[0];
});

