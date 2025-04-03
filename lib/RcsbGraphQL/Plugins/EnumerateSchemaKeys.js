import { Kind, parse, printSchema, visit } from 'graphql';
export const plugin = {
    plugin: (schema, documents, config, info) => {
        const printedSchema = printSchema(schema); // Returns a string representation of the schema
        const document = parse(printedSchema); // Transforms the string into ASTNode
        const nodeNames = [];
        const visitor = (node) => {
            if (node.kind === Kind.FIELD_DEFINITION)
                nodeNames.push(`${node.name.value.toUpperCase()} = "${node.name.value}"`);
            return node;
        };
        visit(document, { leave: visitor });
        const out = ["export class CoreConstants{"];
        nodeNames.forEach((value) => {
            if (value.length > 1) {
                out.push(`\tpublic static readonly ${value.toUpperCase()} = "${value}";`);
            }
        });
        out.push("}");
        return out.join("\n");
    }
};
//# sourceMappingURL=EnumerateSchemaKeys.js.map