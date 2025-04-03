import { __awaiter } from "tslib";
import { generate } from '@graphql-codegen/cli';
export function generateInterfaces(schemaFile, interfaceOutputFile, documents, pluginConfig) {
    return __awaiter(this, void 0, void 0, function* () {
        yield generate({
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
                generate({
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
export function validateQueries(schemaFile, documents) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const test = yield generate({
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
//# sourceMappingURL=GeneratorTools.js.map