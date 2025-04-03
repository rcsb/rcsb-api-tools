"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInterfaces = generateInterfaces;
exports.validateQueries = validateQueries;
const tslib_1 = require("tslib");
const core_1 = require("@graphql-codegen/core");
const cli_1 = require("@graphql-codegen/cli");
const graphql_1 = require("graphql");
const typescriptPlugin = tslib_1.__importStar(require("@graphql-codegen/typescript"));
const load_1 = require("@graphql-codegen/cli/typings/load");
function generateInterfaces(schemaFile, interfaceOutputFile, documents, pluginConfig) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const schemaSource = yield (0, load_1.loadSchema)(schemaFile, { generates: {} });
        const schema = (0, graphql_1.buildSchema)(schemaFile);
        const outputFile = 'relative/pathTo/filename.ts';
        const config = {
            // used by a plugin internally, although the 'typescript' plugin currently
            // returns the string output, rather than writing to a file
            filename: outputFile,
            schema: (0, graphql_1.parse)((0, graphql_1.printSchema)(schema)),
            plugins: [
                {
                    typescript: {}, // Here you can pass configuration to the plugin
                },
            ],
            pluginMap: {
                typescript: typescriptPlugin,
            },
            documents: [],
            config: {}
        };
        const output = yield (0, core_1.codegen)(config);
    });
}
function validateQueries(schemaFile, documents) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise(((resolve, reject) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const test = yield (0, cli_1.generate)({
                    schema: schemaFile,
                    documents: documents,
                    generates: {
                        [process.cwd()]: {
                            plugins: ['typescript'],
                        }
                    }
                }, false);
                resolve(void 0);
            }
            catch (error) {
                reject(void 0);
            }
        })));
    });
}
