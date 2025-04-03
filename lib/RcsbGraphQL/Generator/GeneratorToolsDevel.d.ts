export declare function generateInterfaces(schemaFile: string, interfaceOutputFile: string, documents?: string, pluginConfig?: {
    outputFile: string;
    pluginFile: string;
}): Promise<void>;
export declare function validateQueries(schemaFile: string, documents: string): Promise<void>;
