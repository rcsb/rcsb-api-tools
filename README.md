# rcsb-api-tools

RCSB Saguaro Web API is an open-source library that includes different tools to validate and request data from the [1D Coordinate Server](https://1d-coordinates.rcsb.org), 
the [RCSB Data API](https://data.rcsb.org) and the [RCSB Search Service](https://search.rcsb.org).

### Node Module Instalation
`npm install @rcsb/rcsb-api-tools`

### Requesting RCSB GraphQL data
`import {GraphQLRequest} from "@rcsb/rcsb-api-tools/build/RcsbGraphQL/GraphQLRequest"`

`const client = new GraphQLRequest("data-api"|"1d-coordinates"|url);`

`client.request(query_params, query_string)`;

#### Example

##### query_params
```javascript
const query_params = {
  queryId: "P01112",
  from: "UNIPROT",
  to: "PDB_ENTITY"
}
```

##### query_string
```graphql
query QueryAlignment($queryId: String!, $from: String!, $to: String!){
     alignment(
         queryId:$queryId
         from:$from
         to:$to
         range:$range
     ){
         query_sequence
         target_alignment {
             target_id
             orientation
             target_sequence
             coverage {
                 query_coverage
                 query_length
                 target_coverage
                 target_length
             }
             aligned_regions {
                 query_begin
                 query_end
                 target_begin
                 target_end
                 exon_shift
             }
         }
 
     }
 }
```

### Importing RCSB GraphQL interfaces

#### data-api/yosemite server
E.g. `import {CoreEntry, RcsbEntryContainerIdentifiers} from "@rcsb/rcsb-api-tools/build/RcsbGraphQL/Types/Yosemite/GqlTypes";`

#### 1d-coordinates/borrego server
E.g. `import {AnnotationFeatures, Feature, AlignmentResponse} from "@rcsb/rcsb-api-tools/build/RcsbGraphQL/Types/Borrego/GqlTypes";`

### GRphQL query validation
````javascript
import {validateQueries} from "@rcsb/rcsb-api-tools/build/RcsbGraphQL/Generator/GeneratorTools";
validateQueries(graphql_schema_url, "path_to_queries/my_query.graphql");
````

### Requesting RCSB Search data
`import {SearchRequest} from "@rcsb/rcsb-api-tools/build/RcsbSearch/SearchRequest";`

`const client = new SearchRequest();`

`client.request(query_object);`

#### Example
```javascript
import {SearchQuery} from "@rcsb/rcsb-api-tools/build/RcsbSearch/Types/SearchQueryInterface";
import {LogicalOperator, ReturnType, Service, Type} from "@rcsb/rcsb-api-tools/build/RcsbSearch/Types/SearchEnums";
import {RcsbSearchMetadata} from "@rcsb/rcsb-api-tools/build/RcsbSearch/Types/SearchMetadata";

const search_query = {
    query: {
        type: Type.Group,
        nodes:[{
            type:Type.Terminal,
            service: Service.FullText,
            parameters:{
                attribute:RcsbSearchMetadata.RcsbEntryInfo.DiffrnResolutionHigh.Value.path,
                operator:RcsbSearchMetadata.RcsbEntryInfo.DiffrnResolutionHigh.Value.operator.Greater,
                value: 2
            }
        },{
            type: Type.Terminal,
            service: Service.FullText,
            parameters: {
                attribute: RcsbSearchMetadata.RcsbEntitySourceOrganism.TaxonomyLineage.Name.path,
                operator: RcsbSearchMetadata.RcsbEntitySourceOrganism.TaxonomyLineage.Name.operator.ExactMatch,
                value: "Homo sapiens"
            }
        }],
        logical_operator: LogicalOperator.And,
    },
    return_type: ReturnType.PolymerEntity
};
const search = new SearchRequest();
search.request(search_query);
```

### Importing RCSB Search classes/interfaces

#### Search metadata class
Search metadata class provides the searchable paths and methods for the RCSB Search API 

`import {RcsbSearchMetadata} from "@rcsb/rcsb-api-tools/build/RcsbSearch/Types/SearchMetadata";`

##### Utility examples
E.g. `RcsbSearchMetadata.RcsbEntryInfo.DiffrnResolutionHigh.Value.path` attribute contains the string `"rcsb_entry_info.diffrn_resolution_high.value"`

E.g. `RcsbSearchMetadata.RcsbEntryInfo.DiffrnResolutionHigh.Value.operator` enumerates the possible comparison operations (i.e. `Equals`, `Greater`, `Range`, ...) 

#### Search enums
Search enums provide a collection of enums/classes that provide a controlled vocabulary to build the RCSB Search queries. 
The name of each enum/class (camel cased) matches with the RCSB search schema field name in snake case format.
E.g. `import {AggregationType, Operator, ReturnType, Service} from "@rcsb/rcsb-api-tools/build/RcsbSearch/Types/SearchEnums";`

`AggregationType` encodes the possible values of the schema field `"aggregation_type"`, 
i.e. `AggregationType.Terms = "terms"`, `AggregationType.Histogram = "histogram"`, ...

#### Building GraphQL types from specific URLs

- GraphQL types can be generated from specific URLs. By default, production server are used  
  - E.g. `npm run buildGraphQLInterfaces -- --data-api http://132.249.210.199/graphql --1d-service http://132.249.213.161/graphql`

#### External schemas 

- DW schemas are collected from rcsb-mojave-model project released in maven.
  - rcsb-mojave-model:target/generated-sources/schema/core
  
- Search API schemas are collected from the rcsb-arches git repo.
  - rcsb-arches:src/main/resources/schema

##### Download external schemas

- DW schemas
  - `npm run downloadDwSchemas -- --schema-version <VERSION-TAG>`
  - E.g. `npm run downloadDwSchemas -- --schema-version 1.32.1-MODELS-SNAPSHOT`
  
- Search schemas
  -  `npm run downloadSearchSchemas --  --branch-name <GIT-REMOTE-BRANCH-NAME>`
  -  E.g. `npm run downloadSearchSchemas --  --branch-name dev-computed-models`

