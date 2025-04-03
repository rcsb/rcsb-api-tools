import { __awaiter } from "tslib";
import * as fs from "fs";
import * as _ from "lodash";
import { generateInterface } from "../../RcsbSearch/Plugins/EnumerateSchemaKeys";
if (fs.existsSync("src/RcsbDw/Types/DwEnums.ts"))
    fs.unlinkSync("src/RcsbDw/Types/DwEnums.ts");
function buildAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const enumOutputFile = "src/RcsbDw/Types/DwEnums.ts";
        const schemas = [];
        fs.readdirSync("./schemas/dw_schema").forEach(f => {
            if (/json/.test(f)) {
                const val = _.camelCase(f.split(".")[0]);
                schemas.push({
                    schemaFile: f,
                    interfaceOutputFile: "src/RcsbDw/Types/" + val.charAt(0).toUpperCase() + val.slice(1) + "Interface.ts"
                });
            }
        });
        for (const s of schemas) {
            yield generateInterface(`./schemas/dw_schema/${s.schemaFile}`, s.interfaceOutputFile, enumOutputFile, { cwd: "./schemas/dw_schema" });
            console.log(`${s.schemaFile} interface and enum generated`);
        }
    });
}
buildAll().then(() => {
    console.log("DW build interfaces end");
});
//# sourceMappingURL=GenerateInterfaces.js.map