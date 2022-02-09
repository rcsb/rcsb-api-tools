import {generateInterfaces} from "./GeneratorTools";
import * as configBorregoGraphQL from "../ServerConfig/codegen.borrego.json";
import * as configYosemiteGraphQL from "../ServerConfig/codegen.yosemite.json";

async function buildAll(){
    await generateInterfaces(
        configYosemiteGraphQL.schema,
        configYosemiteGraphQL.interfaceOutputFile,
        configYosemiteGraphQL.documents,
        configYosemiteGraphQL.pluginFile
    );
    await generateInterfaces(
        configBorregoGraphQL.schema,
        configBorregoGraphQL.interfaceOutputFile,
        configBorregoGraphQL.documents
    );
}

buildAll().then(()=>{
    console.log("GraphQL build interfaces end");
})
