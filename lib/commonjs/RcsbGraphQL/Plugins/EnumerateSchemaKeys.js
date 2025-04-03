"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const graphql_1 = require("graphql");
exports.plugin = {
    plugin: (schema, documents, config, info) => {
        const printedSchema = (0, graphql_1.printSchema)(schema); // Returns a string representation of the schema
        const document = (0, graphql_1.parse)(printedSchema); // Transforms the string into ASTNode
        const nodeNames = [];
        const visitor = (node) => {
            if (node.kind === graphql_1.Kind.FIELD_DEFINITION)
                nodeNames.push(`${node.name.value.toUpperCase()} = "${node.name.value}"`);
            return node;
        };
        (0, graphql_1.visit)(document, { leave: visitor });
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
