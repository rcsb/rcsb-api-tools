import { __awaiter } from "tslib";
import { generateInterfaces } from "./GeneratorTools";
import * as configBorregoGraphQL from "../ServerConfig/codegen.borrego.json";
import * as configYosemiteGraphQL from "../ServerConfig/codegen.yosemite.json";
import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";
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
                name: '1d-service',
                description: 'URL or IP to the 1D Coordinate Server. Use "skip" to skip this step'
            }, {
                name: 'help',
                typeLabel: ' ',
                description: 'Print this usage guide.'
            }
        ]
    }
];
const optionDefinitions = [{ name: 'data-api' }, { name: '1d-service' }, { name: 'help' }];
const options = commandLineArgs(optionDefinitions);
if ('help' in options) {
    console.log(commandLineUsage(sections));
    process.exit(0);
}
function buildAll() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (!options["data-api"] || options["data-api"] != 'skip') {
            const schema = (_a = options["data-api"]) !== null && _a !== void 0 ? _a : configYosemiteGraphQL.schema;
            console.log(`Generating data-api types from ${schema}`);
            yield generateInterfaces(schema, configYosemiteGraphQL.interfaceOutputFile, configYosemiteGraphQL.documents, configYosemiteGraphQL.pluginFile);
        }
        else if (options["data-api"] == "skip") {
            console.log("Skipping data-api type generation");
        }
        if (!options["1d-service"] || options["1d-service"] != 'skip') {
            const schema = (_b = options["1d-service"]) !== null && _b !== void 0 ? _b : configBorregoGraphQL.schema;
            console.log(`Generating 1d-service types from ${schema}`);
            yield generateInterfaces(schema, configBorregoGraphQL.interfaceOutputFile, configBorregoGraphQL.documents);
        }
        else if (options["1d-service"] == "skip") {
            console.log("Skipping 1D Coordinate Server type generation");
        }
    });
}
buildAll().then(() => {
    console.log("GraphQL build interfaces end");
});
//# sourceMappingURL=GenerateInterfaces.js.map