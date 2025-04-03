export declare class LocalStorageTools {
    private static readonly storage;
    private static readonly EXPIRATION_TIME;
    static getItem<Q, T>(objKey: Q): T | null;
    static setItem<Q, T>(objKey: Q, objValue: T): void;
    private static store;
    private static collect;
    private static objToKey;
}
