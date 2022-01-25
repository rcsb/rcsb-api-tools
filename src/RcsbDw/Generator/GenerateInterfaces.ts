import * as fs from "fs";
import * as _ from "lodash";
import {generateInterface} from "../../RcsbSearch/Plugins/EnumerateSchemaKeys";

if(fs.existsSync("src/RcsbDw/Types/DwEnums.ts"))
    fs.unlinkSync("src/RcsbDw/Types/DwEnums.ts");

async function buildAll(){

    const enumOutputFile = "src/RcsbDw/Types/DwEnums.ts";
    const schemas: {schemaFile: string;interfaceOutputFile: string;}[] = [];

    fs.readdirSync("./dw_schema").forEach(f => {
        if(/json/.test(f)){
            const val: string = _.camelCase(f.split(".")[0])

            schemas.push({
                schemaFile: f,
                interfaceOutputFile:"src/RcsbDw/Types/"+val.charAt(0).toUpperCase() + val.slice(1)+"Interface.ts"
            });
        }
    });

    for(const s of schemas){
        await generateInterface(
            `./dw_schema/${s.schemaFile}`,
            s.interfaceOutputFile,
            enumOutputFile,
            {cwd:"./dw_schema"}
        );
        console.log(`${s.schemaFile} interface and enum generated`);
    }
}

buildAll().then(()=>{
    console.log("DW build interfaces end");
});
