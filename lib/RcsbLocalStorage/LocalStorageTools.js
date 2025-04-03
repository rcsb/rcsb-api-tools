var _a;
import { sha1 } from "object-hash";
import { compress, decompress } from "lzutf8";
export class LocalStorageTools {
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
        const obj = compress(JSON.stringify({
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
        return JSON.parse(decompress(jsonString, {
            inputEncoding: "StorageBinaryString",
            outputEncoding: "String"
        }));
    }
    static objToKey(obj) {
        if (!obj)
            throw new Error("Object is undefined");
        return sha1(obj);
    }
}
LocalStorageTools.storage = (_a = globalThis.localStorage) !== null && _a !== void 0 ? _a : null;
LocalStorageTools.EXPIRATION_TIME = 3600000;
//# sourceMappingURL=LocalStorageTools.js.map