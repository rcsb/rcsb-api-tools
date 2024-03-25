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

function parseMetadata(json: any, nodeName: string, path: string[], root:{}, fullPaths: string[], indexContex: {[k:string]:any;}): void{
    if(json.type){
        if(json.rcsb_nested_indexing_context) {
            indexContex[nodeName] = json.rcsb_nested_indexing_context
        }
        if(json.type === "array"){
            if(json.items.type === "object"){
                for(const p in json.items.properties){
                    parseMetadata(json.items.properties[p], p, path.concat(p), root, fullPaths , indexContex);
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
                        if(indexContex[q]) {
                            a["rcsb_nested_indexing_context"] = indexContex[q];
                        }
                    });
                    fillNode(a, json, path);
                    fullPaths.push(a["path"])
                }
            }
        }else if(json.type === "object"){
            for(const p in json.properties){
                parseMetadata(json.properties[p], p, path.concat(p), root, fullPaths, indexContex);
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
                    if(indexContex[q]) {
                        a["rcsb_nested_indexing_context"] = indexContex[q];
                    }
                });
                fillNode(a, json, path);
                fullPaths.push(a["path"])
            }
        }
    }else{
        throw "ERROR: No type found"
    }
}

function fillNode(a: any, json: any, path: string[]): void {
    a["path"] =  path.join(".")
    a["type"] = json.type;
    a["format"] = json.format;
    a["description"] = json.description;
    a["rcsb_search_context"] = json.rcsb_search_context;
    a["rcsb_enum_annotated"] = json.rcsb_enum_annotated;
    a["rcsb_full_text_priority"] = json.rcsb_full_text_priority;
    a["rcsb_description"] = json.rcsb_description;
    a["rcsb_nested_indexing"] = json.rcsb_nested_indexing;
    a["rcsb_nested_indexing_context"] = json.rcsb_nested_indexing_context;
    a["rcsb_search_group"] = json.rcsb_search_group;
    a["rcsb_current_maximum_value"] = json.rcsb_current_maximum_value;
    a["rcsb_current_minimum_value"] = json.rcsb_current_minimum_value;
    if(json.enum)
        a["enum"] = json.enum.reduce( (dict: {[k:string]:string}, value: string) => {dict[value]=value; return dict;}, {});
    a["operator"] = {};
    for(const op of (json.rcsb_search_context ?? json.items.rcsb_search_context)){
        if(operators_dict[op])
            for(const opName of operators_dict[op]){
                a["operator"][camelCase(opName)] = opName
            }
    }
}

import * as configSearch from "../ServerConfig/codegen.search.json";
import * as configChemicalSearch from "../ServerConfig/codegen.search.chemical.json";
fetch(configSearch.schema)
    .then(metadata=>{
        metadata.json()
            .then(json=>{
                const root = {};
                const fullPaths: string[] = [];
                parseMetadata(json, "root", [], root, fullPaths, {});
                fetch(configChemicalSearch.schema).then(chemicalMetadata=>{
                    chemicalMetadata.json().then(json=>{
                        parseMetadata(json, "root", [], root, fullPaths, {});
                        fs.writeFileSync(
                            "src/RcsbSearch/Types/SearchMetadata.ts",
                            `export const RcsbSearchMetadata: ${JSON.stringify(root)} = ${JSON.stringify(root)};\n`
                            + `export type RcsbSearchAttributeType = \n"${fullPaths.join("\"\n| \"")}";\n`
                        );
                    })
                })
            })
            .catch(error=>{
                console.error(error);
                throw error;
            })
    })
    .catch(error=>{
        console.error(error);
        throw error;
    });