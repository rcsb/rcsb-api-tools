import {generateInterfaces} from "./GeneratorTools";
import * as configBorregoGraphQL from "../ServerConfig/codegen.borrego.json";
import * as configYosemiteGraphQL from "../ServerConfig/codegen.yosemite.json";

generateInterfaces(
    configYosemiteGraphQL.schema,
    configYosemiteGraphQL.interfaceOutputFile,
    configYosemiteGraphQL.documents,
    configYosemiteGraphQL.pluginFile
);

generateInterfaces(
    configBorregoGraphQL.schema,
    configBorregoGraphQL.interfaceOutputFile,
    configBorregoGraphQL.documents
);
