import {SearchQuery} from "./Types/SearchQueryInterface";
import {QueryResult} from "./Types/SearchResultInterface";
import {CoreConstants} from "../RcsbGraphQL/Types/Yosemite/CoreConstants";
import {AggregationType, Operator, ReturnType, Service, Type} from "./Types/SearchEnums";

const query: SearchQuery = {
    query: {
        type: Type.Terminal,
        service: Service.Text,
        parameters: {
            operator: Operator.Greater,
            value: "1900-01-01",
            attribute: [CoreConstants.RcsbAccessionInfo, CoreConstants.InitialReleaseDate].join(".")
        }
    },
    request_options: {
        facets: [
            {
                aggregation_type: AggregationType.Terms,
                attribute: [CoreConstants.Exptl, CoreConstants.Method].join(".")
            },
            {
                aggregation_type: AggregationType.Terms,
                attribute: [CoreConstants.RcsbPrimaryCitation, CoreConstants.RcsbJournalAbbrev].join(".")
            },
            {
                aggregation_type: AggregationType.Histogram,
                attribute: [CoreConstants.RcsbPolymerEntity, CoreConstants.FormulaWeight].join("."),
                interval: 10,
                min_interval_population: 1
            }
        ]
    },
    return_type: ReturnType.Entry
};

const result = fetch("https://search.rcsb.org/rcsbsearch/v1/query", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(query)
});

result.then(async (response)=>{
    const queryResult: QueryResult = await response.json();
    console.log(queryResult.drilldown![0]);
});

