import fetch from "node-fetch";
import * as  _ from 'lodash';
import * as fs from "fs";

function camelCase(value: string): string{
    const val: string =  _.camelCase(value);
    return val.charAt(0).toUpperCase() + val.slice(1)
}

const operators_dict: any = {
    "exact-match":["in", "exact_match"],
    "full-text":["contains_phrase", "contains_words"],
    "default-match":["equals", "greater", "less", "greater_or_equal", "less_or_equal", "range", "range_closed"]
};

function parseMetadata(json: any, nodeName: string, path: string[], root:{}): void{
    if(json.type){
        if(json.type === "array"){
            if(json.items.type === "object"){
                for(const p in json.items.properties){
                    parseMetadata(json.items.properties[p], p, path.concat(p), root);
                }
            }else{
                if(json.items.rcsb_search_context) {
                    let a: any = root;
                    path.forEach(q=>{
                        const p = camelCase(q);
                        if(a[p]){
                            a = a[p];
                        }else{
                            a[p] = {}
                            a=a[p];
                        }
                    });
                    a["path"] =  path.join(".")
                    a["operator"] = {};
                    for(const op of json.items.rcsb_search_context){
                        if(operators_dict[op])
                            for(const opName of operators_dict[op]){
                                a["operator"][camelCase(opName)] = opName
                            }
                    }
                }
            }
        }else if(json.type === "object"){
            for(const p in json.properties){
                parseMetadata(json.properties[p], p, path.concat(p), root);
            }
        }else if(json.type === "integer" || json.type === "string" || json.type === "number"){
            if(json.rcsb_search_context) {
                let a: any = root;
                path.forEach(q=>{
                    const p = camelCase(q);
                    if(a[p]){
                        a = a[p];
                    }else{
                        a[p] = {}
                        a=a[p];
                    }
                });
                a["path"] =  path.join(".")
                a["operator"] = {};
                for(const op of json.rcsb_search_context){
                    if(operators_dict[op])
                        for(const opName of operators_dict[op]){
                            a["operator"][camelCase(opName)] = opName
                        }
                }
            }
        }
    }else{
        throw "ERROR: No type found"
    }
}

import * as configSearch from "../ServerConfig/codegen.search.json";
import * as configChemicalSearch from "../ServerConfig/codegen.search.chemical.json";
fetch(configSearch.schema).then(metadata=>{
    metadata.json().then(json=>{
        const root = {};
        parseMetadata(json, "root", [], root);
        fetch(configChemicalSearch.schema).then(chemicalMetadata=>{
            chemicalMetadata.json().then(json=>{
                parseMetadata(json, "root", [], root);
                fs.writeFileSync("src/RcsbSearch/Types/SearchMetadata.ts", "export const RcsbSearchMetadata: "+JSON.stringify(root)+" = "+JSON.stringify(root));
            })
        })
    })
});