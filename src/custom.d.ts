declare module '*.graphql' {
    import {DocumentNode} from 'graphql';
    const value: DocumentNode;
    export = value;
}
declare module "*.json" {
    const value: {
        uri:string;
        schema:string;
        documents:string;
        interfaceOutputFile: string;
        pluginConfig: {
            pluginFile:string;
            outputFile:string;
        }[];
    };
    export default value;
}
