import {generateInterfaces} from "./GeneratorTools";
import * as configBorregoGraphQL from "../ServerConfig/codegen.borrego.json";
import * as configYosemiteGraphQL from "../ServerConfig/codegen.yosemite.json";
import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";

type optionType = {'data-api': string; '1d-service': string; 'help': null;};
const sections = [
    {
        header: 'GraphQL schema type generator',
        content: 'Generates types for data-api and 1D Coordinate Server.'
    },
    {
        header: 'Options',
        optionList: [
            {
                name: 'data-api',
                description: 'URL or IP to the data-api. Use "skip" to skip this step'
            }, {
                name:'1d-service',
                description: 'URL or IP to the 1D Coordinate Server. Use "skip" to skip this step'
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

async function buildAll(){

    if(!options["data-api"] || options["data-api"] != 'skip') {
        const schema = options["data-api"] ?? configYosemiteGraphQL.schema
        console.log(`Generating data-api types from ${schema}`);
        await generateInterfaces(
            schema,
            configYosemiteGraphQL.interfaceOutputFile,
            configYosemiteGraphQL.documents,
            configYosemiteGraphQL.pluginFile
        );
    }else if(options["data-api"] == "skip") {
        console.log("Skipping data-api type generation");
    }

    if(!options["1d-service"] || options["1d-service"] != 'skip') {
        const schema = options["1d-service"] ?? configBorregoGraphQL.schema;
        console.log(`Generating 1d-service types from ${schema}`);
        await generateInterfaces(
            schema,
            configBorregoGraphQL.interfaceOutputFile,
            configBorregoGraphQL.documents
        );
    }else if(options["1d-service"] == "skip") {
        console.log("Skipping 1D Coordinate Server type generation");
    }
}

buildAll().then(()=>{
    console.log("GraphQL build interfaces end");
})
