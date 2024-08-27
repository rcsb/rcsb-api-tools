import {SearchQuery} from "../../../src/RcsbSearch/Types/SearchQueryInterface";
import {AggregationType, Operator, ReturnType, Service, Type} from "../../../src/RcsbSearch/Types/SearchEnums";
import {RcsbSearchMetadata} from "../../../src/RcsbSearch/Types/SearchMetadata";

export const FACET_QUERY: SearchQuery = {
    query: {
        type: Type.Terminal,
        service: Service.Text,
        parameters: {
            operator: Operator.Greater,
            value: "1900-01-01",
            attribute: RcsbSearchMetadata.RcsbAccessionInfo.DepositDate.path
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