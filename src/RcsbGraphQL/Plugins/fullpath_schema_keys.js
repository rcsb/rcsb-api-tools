
const { _ } = require('lodash');
const { printSchema, parse, visit  } = require('graphql');

function camelCase(value){
    const val =  _.camelCase(value).replace(/^(\d+)/,"");
    return val.charAt(0).toUpperCase() + val.slice(1)
}

function mapToObject(map) {
    const out = Object.create(null)
    map.forEach((value, key) => {
        if (value instanceof Map) {
            out[key] = mapToObject(value)
        }
        else {
            out[key] = value
        }
    })
    return out
}

module.exports = {
    plugin: (schema, documents, config, info) => {
        const printedSchema = printSchema(schema); // Returns a string representation of the schema
        const astNode = parse(printedSchema); // Transforms the string into ASTNode
        const graphQLtypes = []
        const visitorEnter = {
            ObjectTypeDefinition(node){
                graphQLtypes.push({name:node.name.value, fields:node.fields.map(node=>{
                            let type;
                            if(node.type.type?.name?.value)
                                type = node.type.type.name.value;
                            else if(node.type.type?.type?.name?.value)
                                type = node.type.type.type.name.value;
                            else if(node.type?.name)
                                type = node.type.name.value;
                        return {
                            name: node.name.value,
                            type: type
                        }
                    }
                    )});
                return undefined;
            }
        };
        visit(astNode, { enter:visitorEnter });
        const root = graphQLtypes.filter(t=>(t.name === 'Query'))[0];
        const loop_fields = new Set(root.fields.map(f=>f.name));
        const leafs = new Map();
        function recursivePath(type, path, store){
            type.fields.forEach(f=>{
                if(loop_fields.has(f.name))
                    return;
                const fieldType = graphQLtypes.filter(t=>(t.name === f.type));
                if(fieldType.length === 0){
                    store.push([...path, f.name]);
                }else if(fieldType.length === 1){
                    recursivePath(fieldType[0], [...path, f.name], store);
                }else{
                    throw "Inconsistent field Type. Multiple types are not allowed";
                }
            });
        }
        root.fields.forEach(f=>{
            const query = f.type;
            leafs.set(query, []);
            const fieldType = graphQLtypes.filter(t=>(t.name === f.type))[0];
            recursivePath(fieldType, [], leafs.get(query));
        });
        function recursiveMap(path, pathValue, map) {
            const key = camelCase(path.shift());
            if (path.length > 0) {
                if (!map.has(key))
                    map.set(key, new Map());
                recursiveMap(path, pathValue, map.get(key));
            } else {
                if (map.has(key))
                    throw "Duplicated Key";
                else
                    map.set(key, pathValue);
            }
        }
        const out = [];
        leafs.forEach((store,query)=>{
            out.push(`export class ${camelCase(query)}{`);
            const storeMap = new Map();
            store.forEach(s=>{
                recursiveMap([...s], s.join("."), storeMap);
            });
            storeMap.forEach((v,k)=>{
                if(v instanceof Map)
                    out.push(`\tpublic static readonly ${k} = ${JSON.stringify(mapToObject(v))};`);
                else
                    out.push(`\tpublic static readonly ${k} = "${v}";`);
            })
            out.push("}\n");
        });
        return out.join("\n");
    },
};