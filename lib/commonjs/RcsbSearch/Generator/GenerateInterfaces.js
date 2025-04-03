"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const EnumerateSchemaKeys_1 = require("../Plugins/EnumerateSchemaKeys");
if (fs_1.default.existsSync("src/RcsbSearch/Types/SearchEnums.ts"))
    fs_1.default.unlinkSync("src/RcsbSearch/Types/SearchEnums.ts");
function buildAll() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, EnumerateSchemaKeys_1.generateInterface)("./schemas/search_schema/search/request/json-schema-rcsb_search_query.json", "src/RcsbSearch/Types/SearchQueryInterface.ts", "src/RcsbSearch/Types/SearchEnums.ts", { cwd: "./schemas/search_schema/search/request" });
        console.log(`json-schema-rcsb_search_query.json interface and enum generated`);
        yield (0, EnumerateSchemaKeys_1.generateInterface)("./schemas/search_schema/search/response/json-schema-rcsb_search_results.json", "src/RcsbSearch/Types/SearchResultInterface.ts", "src/RcsbSearch/Types/SearchEnums.ts", { cwd: "./schemas/search_schema/search/response" });
        console.log(`json-schema-rcsb_search_results.json interface and enum generated`);
    });
}
buildAll().then(() => {
    console.log("Search build interfaces end");
});
