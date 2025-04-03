"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagDelimiter = void 0;
class TagDelimiter {
    static parseEntity(rcsbId) {
        const ids = rcsbId.split(TagDelimiter.entity);
        const entityId = ids.pop();
        const entryId = ids.join(TagDelimiter.entity);
        return { entryId, entityId };
    }
    static parseInstance(rcsbId) {
        const ids = rcsbId.split(TagDelimiter.instance);
        const instanceId = ids.pop();
        const entryId = ids.join(TagDelimiter.instance);
        return { instanceId, entryId };
    }
    static isEntityOrInstanceId(rcsb) {
        return this.rcsbEntityRegExp.test(rcsb) || this.rcsbInstanceRegExp.test(rcsb);
    }
    static isRcsbId(rcsb) {
        return this.rcsbEntityRegExp.test(rcsb) || this.rcsbInstanceRegExp.test(rcsb) || this.rcsbEntryRegExp.test(rcsb);
    }
    static isModel(rcsb) {
        return this.alphaFoldRegExp.test(rcsb) || this.modelArchiveRegExp.test(rcsb);
    }
    static getInterfaceId(targetIdentifiers) {
        return `${targetIdentifiers.entry_id}${this.operatorComposition}${targetIdentifiers.assembly_id}${this.instance}${targetIdentifiers.interface_id}`;
    }
}
exports.TagDelimiter = TagDelimiter;
TagDelimiter.entity = "_";
TagDelimiter.instance = ".";
TagDelimiter.sequenceTitle = " ";
TagDelimiter.alignmentTitle = "";
TagDelimiter.operatorComposition = "-";
TagDelimiter.assembly = "-";
TagDelimiter.rcsbEntryRegExp = new RegExp('^(\\d)(\\w{3})$');
TagDelimiter.rcsbEntityRegExp = new RegExp('^(\\d)(\\w{3})(\_)(\\d+)$');
TagDelimiter.rcsbInstanceRegExp = new RegExp('^(\\d)(\\w{3})(\.)(\\w+)$');
TagDelimiter.alphaFoldRegExp = new RegExp('^(AF_AF)(\\w+)');
TagDelimiter.modelArchiveRegExp = new RegExp('^(MA_MABAKCEPC)(\\w+)');
