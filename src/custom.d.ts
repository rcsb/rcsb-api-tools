declare module '*.graphql' {
    import {DocumentNode} from 'graphql';
    const value: DocumentNode;
    export = value;
}
declare module "*.json" {
    const value: {schema:string;documents:string;};
    export default value;
}
