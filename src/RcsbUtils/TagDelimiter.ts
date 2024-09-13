import {TargetIdentifiers} from "../RcsbGraphQL/Types/Borrego/GqlTypes";

export class TagDelimiter {
    public static readonly entity: string = "_";
    public static readonly instance: string = ".";
    public static readonly sequenceTitle: string = " ";
    public static readonly alignmentTitle: string = "";
    public static readonly operatorComposition: string = "-";
    public static readonly assembly: string = "-";

    private static rcsbEntryRegExp = new RegExp('^(\\d)(\\w{3})$');
    private static rcsbEntityRegExp = new RegExp('^(\\d)(\\w{3})(\_)(\\d+)$');
    private static rcsbInstanceRegExp = new RegExp('^(\\d)(\\w{3})(\.)(\\w+)$');
    private static alphaFoldRegExp = new RegExp('^(AF_AF)(\\w+)');
    private static modelArchiveRegExp = new RegExp('^(MA_MABAKCEPC)(\\w+)');

    public static parseEntity(rcsbId:string): {entryId: string;entityId:string;} {
        const ids: string[] = rcsbId.split(TagDelimiter.entity);
        const entityId: string = ids.pop() as string;
        const entryId: string =  ids.join(TagDelimiter.entity)
        return {entryId, entityId};
    }

    public static parseInstance(rcsbId:string): {instanceId: string;entryId:string;} {
        const ids: string[] = rcsbId.split(TagDelimiter.instance);
        const instanceId: string = ids.pop() as string;
        const entryId: string =  ids.join(TagDelimiter.instance)
        return {instanceId, entryId};
    }

    public static isEntityOrInstanceId(rcsb:string): boolean {
        return this.rcsbEntityRegExp.test(rcsb) || this.rcsbInstanceRegExp.test(rcsb);
    }

    public static isRcsbId(rcsb:string): boolean {
        return this.rcsbEntityRegExp.test(rcsb) || this.rcsbInstanceRegExp.test(rcsb) || this.rcsbEntryRegExp.test(rcsb);
    }

    public static isModel(rcsb:string): boolean {
        return this.alphaFoldRegExp.test(rcsb) || this.modelArchiveRegExp.test(rcsb);
    }

    public static getInterfaceId(targetIdentifiers: TargetIdentifiers): string {
        return `${targetIdentifiers.entry_id}${this.operatorComposition}${targetIdentifiers.assembly_id}${this.instance}${targetIdentifiers.interface_id}`;
    }

}