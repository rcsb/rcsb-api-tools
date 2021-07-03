
import { plugin } from '@graphql-codegen/typescript';
import { codegen } from '@graphql-codegen/core';
import { generate } from '@graphql-codegen/cli';
import { buildSchema, printSchema, parse, GraphQLSchema } from 'graphql';
import * as typescriptPlugin from '@graphql-codegen/typescript';
import {Types} from "@graphql-codegen/plugin-helpers";
import {loadSchema} from "@graphql-codegen/cli/load";

export async function generateInterfaces(schemaFile: string, interfaceOutputFile: string, documents?: string, pluginConfig?: {outputFile:string, pluginFile:string}) {
    const schemaSource: GraphQLSchema = await loadSchema(schemaFile,{generates:{}});
    const schema: GraphQLSchema = buildSchema(schemaFile);
    const outputFile = 'relative/pathTo/filename.ts';
    const config: Types.GenerateOptions = {
        // used by a plugin internally, although the 'typescript' plugin currently
        // returns the string output, rather than writing to a file
        filename: outputFile,
        schema: parse(printSchema(schema)),
        plugins: [ // Each plugin should be an object
            {
                typescript: {}, // Here you can pass configuration to the plugin
            },
        ],
        pluginMap: {
            typescript: typescriptPlugin,
        },
        documents:[],
        config:{}
    };
    const output = await codegen(config);
}

export async function validateQueries(schemaFile: string, documents: string): Promise<void> {
    return new Promise<void>((async (resolve, reject) => {
        try{
            const test = await generate(
                {
                    schema: schemaFile,
                    documents: documents,
                    generates: {
                        [process.cwd()]: {
                            plugins: ['typescript'],
                        }
                    }
                },
                false
            );
            resolve(void 0);
        }catch (error){
            reject(void 0);
        }
    }));
}