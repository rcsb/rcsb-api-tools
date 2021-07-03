import {
    printSchema,
    parse,
    visit,
    DocumentNode,
    FieldDefinitionNode
} from 'graphql';
import {CodegenPlugin} from '@graphql-codegen/plugin-helpers'

const visited = new Set();

export const plugin: CodegenPlugin = {
    plugin: (schema, documents, config, info) => {
        const printedSchema: string = printSchema(schema); // Returns a string representation of the schema
        const astNode: DocumentNode = parse(printedSchema); // Transforms the string into ASTNode
        const visitor: any  = {
            FieldDefinition:(node: FieldDefinitionNode)=>{
                return `${node.name.value.toUpperCase()} = "${node.name.value}"`;
            }
        };
        const result: string[] = visit(astNode, { leave: visitor });
        const str = result.join('\n');
        return "export class CoreConstants{\n"+str.substring(0, str.length - 1)+"\n}\n";
    }
};
