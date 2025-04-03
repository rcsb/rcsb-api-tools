"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInterface = generateInterface;
const tslib_1 = require("tslib");
const json_schema_to_typescript_1 = require("json-schema-to-typescript");
const fs = tslib_1.__importStar(require("fs"));
const _ = tslib_1.__importStar(require("lodash"));
function replace(value) {
    const replace = new RegExp(/"|\s|;|\?|:|\||\(|\)/gi);
    return value.replace(replace, "");
}
function camelCase(value) {
    const val = _.camelCase(value);
    let out = val.charAt(0).toUpperCase() + val.slice(1);
    if (!(/^[a-z0-9_]+$/i).test(value))
        out += "_";
    if ((/^\d$/).test(out.charAt(0)))
        return "_" + out;
    return out;
}
function getCurrentEnums(fileName) {
    const enumSet = new Set();
    const regExp = new RegExp(/(export)(\s+)(enum)(\s+)(\w+)(\s+)/);
    if (fs.existsSync(fileName)) {
        const file = fs.readFileSync(fileName, "utf-8");
        file.split("\n").forEach((line, n) => {
            if (regExp.test(line)) {
                const match = line.match(regExp);
                if (match) {
                    const key = match[5];
                    enumSet.add(key);
                }
            }
        });
    }
    return enumSet;
}
//TODO this is a very unstable method!!!!
function generateEnum(interfaceFile, constantsFile) {
    const file = fs.readFileSync(interfaceFile, "utf-8");
    const regExpUnion = new RegExp(/(\w+)(\??)(:)(\s)(")/);
    const regExpTypeUnion = new RegExp(/(export)(\s+)(type)(\s+)(\w+)(\s*)(=)(\s*)(")(\w+)(")(\s*)(\|)/);
    const regExpSingleType = new RegExp(/(export)(\s+)(type)(\s+)(\w+)(\s*)(=)(\s*)(")(\w+)(")(;)/);
    const regExpTpyUnionBreak = new RegExp(/(export)(\s+)(type)(\s+)(\w+)(\s*)(=)($)/);
    const regExpSingleKey = new RegExp(/(\w+)(\??)(:)(\s?\(?)$/);
    const regExpSingleUnion = new RegExp(/(\s+)(\|)(\s)(")([a-zA-Z0-9-_]+)(")(;?)$/);
    const keyUnionMap = new Map();
    let multiLineUnionFlag = false;
    let holdKey;
    file.split("\n").forEach((line, n) => {
        var _a, _b;
        if (regExpTypeUnion.test(line)) {
            const match = line.match(regExpTypeUnion);
            if (match) {
                const key = match[5];
                if (!keyUnionMap.has(key))
                    keyUnionMap.set(key, new Set());
                line.split("=")[1].split("|").forEach(unionValue => {
                    var _a;
                    (_a = keyUnionMap.get(key)) === null || _a === void 0 ? void 0 : _a.add(replace(unionValue));
                });
            }
        }
        else if (regExpSingleType.test(line)) {
            const match = line.match(regExpSingleType);
            if (match) {
                const key = match[5];
                const value = match[10];
                if (!keyUnionMap.has(key))
                    keyUnionMap.set(key, new Set());
                (_a = keyUnionMap.get(key)) === null || _a === void 0 ? void 0 : _a.add(replace(value));
            }
        }
        else if (regExpUnion.test(line)) {
            const keyUnion = line.split(":");
            if (keyUnion.length != 2) {
                throw `Unknown line format in (line number ${n}): ${line}`;
            }
            else {
                const key = replace(keyUnion[0]);
                const union = keyUnion[1];
                if (!keyUnionMap.has(key))
                    keyUnionMap.set(key, new Set());
                union.split("|").forEach(unionValue => {
                    var _a;
                    (_a = keyUnionMap.get(key)) === null || _a === void 0 ? void 0 : _a.add(replace(unionValue));
                });
            }
        }
        else if (regExpSingleKey.test(line)) {
            multiLineUnionFlag = true;
            holdKey = replace(line);
        }
        else if (multiLineUnionFlag && regExpSingleUnion.test(line)) {
            if (!keyUnionMap.has(holdKey))
                keyUnionMap.set(holdKey, new Set());
            (_b = keyUnionMap.get(holdKey)) === null || _b === void 0 ? void 0 : _b.add(replace(line));
        }
        else if (regExpTpyUnionBreak.test(line)) {
            const match = line.match(regExpTpyUnionBreak);
            if (match) {
                multiLineUnionFlag = true;
                holdKey = match[5];
            }
        }
        else {
            multiLineUnionFlag = false;
            holdKey = "";
        }
    });
    const enums = [];
    const enumSet = getCurrentEnums(constantsFile);
    keyUnionMap.forEach((unionValues, key) => {
        if (enumSet.has(camelCase(key)))
            return;
        enumSet.add(camelCase(key));
        enums.push(`export enum ${camelCase(key)} {`);
        unionValues.forEach(uV => {
            enums.push(`    ${camelCase(uV)} = "${uV}",`);
        });
        enums[enums.length - 1] = enums[enums.length - 1].substring(0, enums[enums.length - 1].length - 1);
        enums.push("}\n");
    });
    fs.appendFileSync(constantsFile, `${enums.join("\n")}\n`);
}
function generateInterface(schemaFile, interfaceFile, constantsFile, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const schema = yield (0, json_schema_to_typescript_1.compileFromFile)(schemaFile, options);
        fs.writeFileSync(interfaceFile, schema);
        generateEnum(interfaceFile, constantsFile);
        return interfaceFile;
    });
}
