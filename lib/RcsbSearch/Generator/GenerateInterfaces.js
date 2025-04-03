import { __awaiter } from "tslib";
import fs from "fs";
import { generateInterface } from "../Plugins/EnumerateSchemaKeys";
if (fs.existsSync("src/RcsbSearch/Types/SearchEnums.ts"))
    fs.unlinkSync("src/RcsbSearch/Types/SearchEnums.ts");
function buildAll() {
    return __awaiter(this, void 0, void 0, function* () {
        yield generateInterface("./schemas/search_schema/search/request/json-schema-rcsb_search_query.json", "src/RcsbSearch/Types/SearchQueryInterface.ts", "src/RcsbSearch/Types/SearchEnums.ts", { cwd: "./schemas/search_schema/search/request" });
        console.log(`json-schema-rcsb_search_query.json interface and enum generated`);
        yield generateInterface("./schemas/search_schema/search/response/json-schema-rcsb_search_results.json", "src/RcsbSearch/Types/SearchResultInterface.ts", "src/RcsbSearch/Types/SearchEnums.ts", { cwd: "./schemas/search_schema/search/response" });
        console.log(`json-schema-rcsb_search_results.json interface and enum generated`);
    });
}
buildAll().then(() => {
    console.log("Search build interfaces end");
});
//# sourceMappingURL=GenerateInterfaces.js.map