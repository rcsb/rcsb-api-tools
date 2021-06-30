declare module '*.module.css';
declare module '*.module.scss';
declare module '*.module.sass';
declare module '*.graphql' {
    import {DocumentNode} from 'graphql';
    const value: DocumentNode;
    export = value;
}
declare module "*.json" {
    const value: any;
    export default value;
}

declare module 'ideogram';