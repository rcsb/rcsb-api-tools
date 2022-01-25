import {compileFromFile, Options} from "json-schema-to-typescript"
import * as fs from "fs";
import * as _ from "lodash";

function replace(value: string): string{
    const replace: RegExp = new RegExp(/"|\s|;|\?|:|\||\(|\)/gi);
    return value.replace(replace,"");
}

function camelCase(value: string): string{
    const val: string =  _.camelCase(value);
    let out: string = val.charAt(0).toUpperCase() + val.slice(1)
    if(!(/^[a-z0-9_]+$/i).test(value))
        out += "_";
    if((/^\d$/).test(out.charAt(0)))
        return "_"+out;
    return out;
}

function getCurrentEnums(fileName: string): Set<string>{
    const enumSet: Set<string> = new Set<string>();
    const regExp = new RegExp(/(export)(\s+)(enum)(\s+)(\w+)(\s+)/);
    if(fs.existsSync(fileName)) {
        const file: string = fs.readFileSync(fileName, "utf-8");
        file.split("\n").forEach((line, n)=>{
            if(regExp.test(line)){
                const match: RegExpMatchArray | null = line.match(regExp);
                if(match){
                    const key: string = match[5];
                    enumSet.add(key);
                }
            }
        });
    }
    return enumSet;
}

function generateEnum(interfaceFile: string, constantsFile: string): void{
    const file:string = fs.readFileSync(interfaceFile, "utf-8");
    const regExpUnion = new RegExp(/(\w+)(\??)(:)(\s)(")/);
    const regExpTypeUnion = new RegExp(/(export)(\s+)(type)(\s+)(\w+)(\s*)(=)(\s*)(")(\w+)(")(\s*)(\|)/);
    const regExpSingleKey = new RegExp(/(\w+)(\??)(:)(\s?\(?)$/);
    const regExpSingleUnion = new RegExp(/(\s+)(\|)(\s)(")([a-zA-Z0-9-_]+)(")(;?)$/);
    const keyUnionMap: Map<string, Set<string>> = new Map<string, Set<string>>();
    let multiLineUnionFlag: boolean = false;
    let holdKey: string;
    file.split("\n").forEach((line, n)=>{
        if(regExpTypeUnion.test(line)){
            const match: RegExpMatchArray | null = line.match(regExpTypeUnion);
            if(match){
                const key: string = match[5];
                if(!keyUnionMap.has(key))
                    keyUnionMap.set(key, new Set<string>());
                line.split("=")[1].split("|").forEach(unionValue=>{
                    keyUnionMap.get(key)?.add(replace(unionValue));
                });
            }
        }else if(regExpUnion.test(line)){
            const keyUnion: string[] = line.split(":");
            if(keyUnion.length != 2){
                throw `Unknown line format in (line number ${n}): ${line}`;
            }else{
                const key: string = replace(keyUnion[0]);
                const union: string = keyUnion[1];
                if(!keyUnionMap.has(key))
                    keyUnionMap.set(key, new Set<string>());
                union.split("|").forEach(unionValue=>{
                    keyUnionMap.get(key)?.add(replace(unionValue));
                });
            }
        }else if(regExpSingleKey.test(line)){
            multiLineUnionFlag = true;
            holdKey = replace(line);
        }else if(multiLineUnionFlag && regExpSingleUnion.test(line)){
            if(!keyUnionMap.has(holdKey))
                keyUnionMap.set(holdKey, new Set<string>());
            keyUnionMap.get(holdKey)?.add(replace(line));
        }else{
            multiLineUnionFlag = false;
            holdKey = "";
        }
    });
    const enums: string[] = [];
    const enumSet: Set<String> = getCurrentEnums(constantsFile);
    keyUnionMap.forEach((unionValues,key)=>{
        if(enumSet.has(camelCase(key)))
            return;
        enumSet.add(camelCase(key));
        enums.push(`export enum ${camelCase(key)} {`);
        unionValues.forEach(uV=>{
            enums.push(`    ${camelCase(uV)} = "${uV}",`);
        });
        enums[enums.length-1] = enums[enums.length-1].substring(0, enums[enums.length-1].length - 1);
        enums.push("}\n");
    });
    fs.appendFileSync(constantsFile, `${enums.join("\n")}\n`);
}

export async function generateInterface(schemaFile: string, interfaceFile: string, constantsFile: string, options?:Partial<Options>): Promise<string>{
    const schema: string = await compileFromFile(schemaFile, options);
    fs.writeFileSync(interfaceFile, schema);
    generateEnum(interfaceFile, constantsFile);
    return interfaceFile;
}

