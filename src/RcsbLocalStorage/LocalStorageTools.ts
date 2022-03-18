import {sha1} from "object-hash";
import {compress, decompress} from  "lzutf8";

export class LocalStorageTools {

    private static readonly storage: Storage | null = globalThis.localStorage ?? null;
    private static readonly EXPIRATION_TIME = 3600000;



    public static getItem<Q,T>(objKey: Q): T|null {
        if(!LocalStorageTools.storage)
            return null;
        const item: {data:T;timestamp:number;} | null= LocalStorageTools.collect<Q,T>(objKey);
        if(!item)
            return null;
        const timeInterval: number = Date.now()-item.timestamp;
        if(timeInterval>LocalStorageTools.EXPIRATION_TIME)
            return null;
        return item.data;
    }

    public static setItem<Q,T>(objKey: Q, objValue: T): void {
        if(!LocalStorageTools.storage)
            return;
        try {
            LocalStorageTools.store<Q,T>(objKey, objValue);
        }catch (e) {
            console.warn("Local storage failed: Cleaning and trying again.");
            try{
                LocalStorageTools.storage.clear();
                LocalStorageTools.store<Q,T>(objKey, objValue);
            }catch (e) {
                console.error("Local storage second failed: No more attempts.");
            }
        }
    }

    private static store<Q,T>(objKey: Q, objValue: T): void{
        const key: string = LocalStorageTools.objToKey<Q>(objKey)
        const obj = compress(JSON.stringify({
            data: objValue,
            timestamp: Date.now()
        }),{
            inputEncoding: "String",
            outputEncoding: "StorageBinaryString"
        })
        LocalStorageTools.storage?.setItem(key, obj);
    }

    private static collect<Q,T>(objKey: Q): {data:T;timestamp:number;}|null {
        const key: string = LocalStorageTools.objToKey<Q>(objKey)
        const jsonString: string|null|undefined = LocalStorageTools.storage?.getItem(key);
        if(!jsonString)
            return null;
        return JSON.parse( decompress(jsonString,{
            inputEncoding: "StorageBinaryString",
            outputEncoding: "String"
        }) );
    }

    private static objToKey<Q>(obj:Q): string {
        return sha1(obj);
    }
}