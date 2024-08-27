import {GraphQLRequest} from "../src/RcsbGraphQL/GraphQLRequest";
import {CoreEntry, CorePolymerEntity} from "../src/RcsbGraphQL/Types/Yosemite/GqlTypes";
import fs from "fs";

describe('Testing Data API request', ()=>{

    const dataApiClient: GraphQLRequest = new GraphQLRequest("data-api" , {fetch: fetch as any});

    test('Test Data API multiple entries request',async ()=>{
        const multipleEntriesQuery = fs.readFileSync(__dirname+"/Queries/DataApi/QueryMultipleEntriesProperties.graphql", "utf-8");
        const response = await dataApiClient.request<{entryIds:string[]},{entries:CoreEntry[]}>(
            {
                entryIds: ["4HHB", "1ACB", "101M"],
            },
            multipleEntriesQuery
        );
        expect(response).toBeDefined();
        expect(response.entries.length).toBeGreaterThan(0);
        response.entries.forEach(e=>{
            expect(e.rcsb_id).toBeDefined();
            expect(e.rcsb_entry_info?.experimental_method).toBeDefined();
        });
    });

    test('Test Data API multiple entities request',async ()=>{
        const multipleEntriesQuery = fs.readFileSync(__dirname+"/Queries/DataApi/QueryMultipleEntityInstances.graphql", "utf-8");
        const response = await dataApiClient.request<{entityIds:string[]},{polymer_entities: CorePolymerEntity[]}>(
            {
                entityIds: ["4HHB_1", "1ACB_1", "101M_1"],
            },
            multipleEntriesQuery
        );
        expect(response).toBeDefined();
        expect(response.polymer_entities.length).toBeGreaterThan(0);
        response.polymer_entities.forEach(e=>{
            expect(e.rcsb_id).toBeDefined();
            expect(e.polymer_entity_instances?.length).toBeGreaterThan(0);
            e.polymer_entity_instances?.forEach(pei=>{
                expect(pei?.rcsb_id).toBeDefined();
                expect(pei?.polymer_entity?.rcsb_polymer_entity?.pdbx_description).toBeDefined();
                expect(pei?.rcsb_polymer_entity_instance_container_identifiers?.rcsb_id).toBeDefined();
            });
        });
    });

});