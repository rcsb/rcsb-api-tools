"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageTools = void 0;
const object_hash_1 = require("object-hash");
const lzutf8_1 = require("lzutf8");
class LocalStorageTools {
    static getItem(objKey) {
        if (!LocalStorageTools.storage)
            return null;
        const item = LocalStorageTools.collect(objKey);
        if (!item)
            return null;
        const timeInterval = Date.now() - item.timestamp;
        if (timeInterval > LocalStorageTools.EXPIRATION_TIME)
            return null;
        return item.data;
    }
    static setItem(objKey, objValue) {
        if (!LocalStorageTools.storage)
            return;
        try {
            LocalStorageTools.store(objKey, objValue);
        }
        catch (e) {
            console.warn("Local storage failed: Cleaning and trying again.");
            try {
                LocalStorageTools.storage.clear();
                LocalStorageTools.store(objKey, objValue);
            }
            catch (e) {
                console.error("Local storage second failed: No more attempts.");
            }
        }
    }
    static store(objKey, objValue) {
        var _a;
        const key = LocalStorageTools.objToKey(objKey);
        const obj = (0, lzutf8_1.compress)(JSON.stringify({
            data: objValue,
            timestamp: Date.now()
        }), {
            inputEncoding: "String",
            outputEncoding: "StorageBinaryString"
        });
        (_a = LocalStorageTools.storage) === null || _a === void 0 ? void 0 : _a.setItem(key, obj);
    }
    static collect(objKey) {
        var _a;
        const key = LocalStorageTools.objToKey(objKey);
        const jsonString = (_a = LocalStorageTools.storage) === null || _a === void 0 ? void 0 : _a.getItem(key);
        if (!jsonString)
            return null;
        return JSON.parse((0, lzutf8_1.decompress)(jsonString, {
            inputEncoding: "StorageBinaryString",
            outputEncoding: "String"
        }));
    }
    static objToKey(obj) {
        if (!obj)
            throw new Error("Object is undefined");
        return (0, object_hash_1.sha1)(obj);
    }
}
exports.LocalStorageTools = LocalStorageTools;
LocalStorageTools.storage = (_a = globalThis.localStorage) !== null && _a !== void 0 ? _a : null;
LocalStorageTools.EXPIRATION_TIME = 3600000;
