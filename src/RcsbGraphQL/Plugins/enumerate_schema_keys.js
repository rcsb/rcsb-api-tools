const { _ } = require('lodash');
const { printSchema, parse, visit } = require('graphql');

function camelCase(value){
    const val =  _.camelCase(value).replace(/^(\d+)/,"");
    return val.charAt(0).toUpperCase() + val.slice(1)
}

const visited = new Set();
module.exports = {
    plugin: (schema, documents, config, info) => {
        const printedSchema = printSchema(schema); // Returns a string representation of the schema
        const astNode = parse(printedSchema); // Transforms the string into ASTNode
        const visitor = {
            FieldDefinition: node => {
                // Transform the field AST node into a string, containing only the name of the field
                return node.name.value;
            },
            ObjectTypeDefinition: node => {
                // "node.fields" is an array of strings, because we transformed it using "FieldDefinition".
                return node.fields.filter(f=>{
                    if(visited.has(f)){
                        return false
                    }else if(typeof f === "string"){
                        visited.add(f);
                        return true;
                    }
                }).map(field => `\t${camelCase(field)} = "${field}",`).join('\n');
            },
        };

        const result = visit(astNode, { leave: visitor });

        const str = result.definitions.filter(d=> typeof d === "string" && d.length > 0).join('\n');
        return "export enum CoreConstants{\n"+str.substring(0, str.length - 1)+"\n}\n";
    },
};