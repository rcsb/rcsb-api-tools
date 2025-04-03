import { __awaiter } from "tslib";
import { codegen } from '@graphql-codegen/core';
import { generate } from '@graphql-codegen/cli';
import { buildSchema, printSchema, parse } from 'graphql';
import * as typescriptPlugin from '@graphql-codegen/typescript';
import { loadSchema } from "@graphql-codegen/cli/typings/load";
export function generateInterfaces(schemaFile, interfaceOutputFile, documents, pluginConfig) {
    return __awaiter(this, void 0, void 0, function* () {
        const schemaSource = yield loadSchema(schemaFile, { generates: {} });
        const schema = buildSchema(schemaFile);
        const outputFile = 'relative/pathTo/filename.ts';
        const config = {
            // used by a plugin internally, although the 'typescript' plugin currently
            // returns the string output, rather than writing to a file
            filename: outputFile,
            schema: parse(printSchema(schema)),
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
        const output = yield codegen(config);
    });
}
export function validateQueries(schemaFile, documents) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const test = yield generate({
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
//# sourceMappingURL=GeneratorToolsDevel.js.map