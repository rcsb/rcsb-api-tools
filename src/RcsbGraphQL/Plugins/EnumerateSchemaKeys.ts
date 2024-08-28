import {DocumentNode, Kind, parse, printSchema, visit} from 'graphql';
import {CodegenPlugin} from '@graphql-codegen/plugin-helpers'
import {ASTVisitFn} from "graphql/language/visitor";
import {ASTNode} from "graphql/language/ast";

export const plugin: CodegenPlugin = {
    plugin: (schema, documents, config, info) => {
        const printedSchema: string = printSchema(schema); // Returns a string representation of the schema
        const document: DocumentNode = parse(printedSchema); // Transforms the string into ASTNode
        const nodeNames: string[] = [];
        const visitor: ASTVisitFn<ASTNode>  = (node: ASTNode)=>{
            if(node.kind === Kind.FIELD_DEFINITION)
                nodeNames.push(`${node.name.value.toUpperCase()} = "${node.name.value}"`);
            return node;
        };
        visit(document, { leave: visitor });
        const out = ["export class CoreConstants{"];
        nodeNames.forEach((value)=>{
            if(value.length > 1){
                out.push(`\tpublic static readonly ${value.toUpperCase()} = "${value}";`);
            }
        });
        out.push("}");
        return out.join("\n");
    }
};
