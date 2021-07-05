import { generate } from '@graphql-codegen/cli';

export async function generateInterfaces(schemaFile: string, interfaceOutputFile: string, documents?: string, pluginConfig?: {outputFile:string, pluginFile:string}[]) {
    await generate(
        {
            schema: schemaFile,
            documents:  documents ? process.cwd() +"/"+ documents : undefined,
            generates: {
                [process.cwd() + "/" + interfaceOutputFile]: {
                    plugins: ['typescript'],
                }
            },
        },
        true
    );
    if(pluginConfig)
        pluginConfig.forEach((pc)=>{
            console.log(`Running plugin ${pc.pluginFile}`);
            generate(
                {
                    schema: schemaFile,
                    documents:  documents ? process.cwd() +"/"+ documents : undefined,
                    generates: {
                        [process.cwd() + "/" + pc.outputFile]: {
                            plugins: [pc.pluginFile],
                        }
                    },
                },
                true
            ).then(()=>{
                console.log(`Generated ${process.cwd() + "/" + pc.outputFile}`);
            });
        })


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
                            plugins: [__dirname+"/../Plugins/null.js"],
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