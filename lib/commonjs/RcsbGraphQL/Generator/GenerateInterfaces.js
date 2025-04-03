"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const GeneratorTools_1 = require("./GeneratorTools");
const configBorregoGraphQL = tslib_1.__importStar(require("../ServerConfig/codegen.borrego.json"));
const configYosemiteGraphQL = tslib_1.__importStar(require("../ServerConfig/codegen.yosemite.json"));
const command_line_args_1 = tslib_1.__importDefault(require("command-line-args"));
const command_line_usage_1 = tslib_1.__importDefault(require("command-line-usage"));
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
const options = (0, command_line_args_1.default)(optionDefinitions);
if ('help' in options) {
    console.log((0, command_line_usage_1.default)(sections));
    process.exit(0);
}
function buildAll() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (!options["data-api"] || options["data-api"] != 'skip') {
            const schema = (_a = options["data-api"]) !== null && _a !== void 0 ? _a : configYosemiteGraphQL.schema;
            console.log(`Generating data-api types from ${schema}`);
            yield (0, GeneratorTools_1.generateInterfaces)(schema, configYosemiteGraphQL.interfaceOutputFile, configYosemiteGraphQL.documents, configYosemiteGraphQL.pluginFile);
        }
        else if (options["data-api"] == "skip") {
            console.log("Skipping data-api type generation");
        }
        if (!options["1d-service"] || options["1d-service"] != 'skip') {
            const schema = (_b = options["1d-service"]) !== null && _b !== void 0 ? _b : configBorregoGraphQL.schema;
            console.log(`Generating 1d-service types from ${schema}`);
            yield (0, GeneratorTools_1.generateInterfaces)(schema, configBorregoGraphQL.interfaceOutputFile, configBorregoGraphQL.documents);
        }
        else if (options["1d-service"] == "skip") {
            console.log("Skipping 1D Coordinate Server type generation");
        }
    });
}
buildAll().then(() => {
    console.log("GraphQL build interfaces end");
});
