
const { printSchema, parse, visit  } = require('graphql');


module.exports = {
    plugin: (schema, documents, config, info) => {
        const fields = new Set();
        const printedSchema = printSchema(schema); // Returns a string representation of the schema
        const astNode = parse(printedSchema); // Transforms the string into ASTNode
        const visitor =  (node) => {
                if(node.kind === "FieldDefinition")
                    fields.add(node.name.value)
                return node;
        };
        visit(astNode, { leave: visitor });
        const out = ["export class CoreConstants{"];
        fields.forEach((value)=>{
            if(value.length > 1){
                out.push(`\tpublic static readonly ${value.toUpperCase()} = "${value}";`);
            }
        });
        out.push("}");
        return out.join("\n");
    },
};