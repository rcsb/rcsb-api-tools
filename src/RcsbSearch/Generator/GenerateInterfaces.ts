import * as fs from "fs";
import {generateInterface} from "../Plugins/EnumerateSchemaKeys";

if(fs.existsSync("src/RcsbSearch/Types/SearchEnums.ts"))
    fs.unlinkSync("src/RcsbSearch/Types/SearchEnums.ts");

generateInterface(
    "search_schema/json-schema-rcsb_search_query.json",
    "src/RcsbSearch/Types/SearchQueryInterface.ts",
    "src/RcsbSearch/Types/SearchEnums.ts"
).then((resolve)=>{
    console.log(`${resolve} interface and enum generated`);
});

generateInterface(
    "search_schema/json-schema-rcsb_search_results.json",
    "src/RcsbSearch/Types/SearchResultInterface.ts",
    "src/RcsbSearch/Types/SearchEnums.ts"
).then((resolve)=>{
    console.log(`${resolve} interface and enum generated`);
});
