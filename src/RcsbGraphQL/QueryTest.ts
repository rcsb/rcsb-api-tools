import fetch from "node-fetch";
import {GraphQLRequest} from "./GraphQLRequest";
import {CoreEntry} from "./Types/Yosemite/GqlTypes";
import fs from "fs";
import {SequenceAlignments, SequenceReference} from "./Types/Borrego/GqlTypes";
import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";

type optionType = {'data-api': string; '1d-service': string; 'help': null;};
const sections = [
    {
        header: 'GraphQL Test',
        content: 'Testing graphql queries'
    },
    {
        header: 'Options',
        optionList: [
            {
                name: 'data-api',
                description: 'URL or IP to the data-api'
            }, {
                name:'1d-service',
                description: 'URL or IP to the 1D Coordinate Server'
            }, {
                name: 'help',
                typeLabel: ' ',
                description: 'Print this usage guide.'
            }
        ]
    }
];

const optionDefinitions: { name: keyof optionType}[] = [{name: 'data-api'},{name: '1d-service'},{name: 'help'}];
const options:  optionType = commandLineArgs(optionDefinitions) as optionType;

if('help' in options){
    console.log(commandLineUsage(sections));
    process.exit(0);
}

const yosemiteClient: GraphQLRequest = new GraphQLRequest(options["data-api"] ?? "data-api" , {fetch: fetch as any});
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

const borregoClient: GraphQLRequest = new GraphQLRequest(options["1d-service"] ?? "1d-coordinates" , {fetch: fetch as any});
const borregoQuery = fs.readFileSync(__dirname+"/Queries/Borrego/QueryAlignments.graphql", "utf-8");
const borregoRequest = async ()=>{
    const response = await borregoClient.request<{queryId: string; from: SequenceReference, to:SequenceReference},{alignment:SequenceAlignments}>(
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

