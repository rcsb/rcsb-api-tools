"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInterfaces = generateInterfaces;
exports.validateQueries = validateQueries;
const tslib_1 = require("tslib");
const cli_1 = require("@graphql-codegen/cli");
function generateInterfaces(schemaFile, interfaceOutputFile, documents, pluginConfig) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, cli_1.generate)({
            overwrite: true,
            schema: schemaFile,
            documents: documents ? process.cwd() + "/" + documents : undefined,
            config: {
                declarationKind: "interface"
            },
            generates: {
                [process.cwd() + "/" + interfaceOutputFile]: {
                    plugins: ['typescript'],
                }
            },
        }, true);
        if (pluginConfig)
            pluginConfig.forEach((pc) => {
                console.log(`Running plugin ${pc.pluginFile}`);
                (0, cli_1.generate)({
                    schema: schemaFile,
                    documents: documents ? process.cwd() + "/" + documents : undefined,
                    generates: {
                        [process.cwd() + "/" + pc.outputFile]: {
                            plugins: [pc.pluginFile],
                        }
                    },
                }, true).then(() => {
                    console.log(`Generated ${process.cwd() + "/" + pc.outputFile}`);
                });
            });
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
                            plugins: [__dirname + "/../Plugins/null.js"],
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
