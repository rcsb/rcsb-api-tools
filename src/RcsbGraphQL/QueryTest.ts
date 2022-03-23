import fetch from "node-fetch";
import {GraphQLRequest} from "./GraphQLRequest";
import {CoreEntry} from "./Types/Yosemite/GqlTypes";
import fs from "fs";
import {AlignmentResponse, SequenceReference} from "./Types/Borrego/GqlTypes";

const yosemiteClient: GraphQLRequest = new GraphQLRequest("data-api" , {fetch: fetch as any});
const yosemiteQuery = fs.readFileSync(__dirname+"/Queries/Yosemite/QueryMultipleEntriesProperties.graphql", "utf-8");
const yoemiteRequest = async ()=>{
    const response = await yosemiteClient.request<{entryIds:string[]},{entries:CoreEntry[]}>(
        {
            entryIds: ["4hhb"],
        },
        yosemiteQuery
    );
    console.log(response);
}

const borregoClient: GraphQLRequest = new GraphQLRequest("1d-coordinates" , {fetch: fetch as any});
const borregoQuery = fs.readFileSync(__dirname+"/Queries/Borrego/QueryAlignments.graphql", "utf-8");
const borregoRequest = async ()=>{
    const response = await borregoClient.request<{queryId: string; from: SequenceReference, to:SequenceReference},{alignment:AlignmentResponse}>(
        {
            queryId: "4HHB_1",
            from: SequenceReference.PdbEntity,
            to:SequenceReference.NcbiProtein
        },
        borregoQuery
    );
    console.log(response);
}

yoemiteRequest().then(()=>{
    console.log("GraphQL yosemite check OK");
    borregoRequest().then(()=>{
        console.log("GraphQL borrego check OK");
        process.exit();
    })
});

