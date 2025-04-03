import { TargetIdentifiers } from "../RcsbGraphQL/Types/Borrego/GqlTypes";
export declare class TagDelimiter {
    static readonly entity: string;
    static readonly instance: string;
    static readonly sequenceTitle: string;
    static readonly alignmentTitle: string;
    static readonly operatorComposition: string;
    static readonly assembly: string;
    private static rcsbEntryRegExp;
    private static rcsbEntityRegExp;
    private static rcsbInstanceRegExp;
    private static alphaFoldRegExp;
    private static modelArchiveRegExp;
    static parseEntity(rcsbId: string): {
        entryId: string;
        entityId: string;
    };
    static parseInstance(rcsbId: string): {
        instanceId: string;
        entryId: string;
    };
    static isEntityOrInstanceId(rcsb: string): boolean;
    static isRcsbId(rcsb: string): boolean;
    static isModel(rcsb: string): boolean;
    static getInterfaceId(targetIdentifiers: TargetIdentifiers): string;
}
