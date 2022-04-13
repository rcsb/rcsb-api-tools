import * as fs from "fs";
import extract from "extract-zip";
import Downloader from "nodejs-file-downloader";

async function exec(){
    const tmpPath: string = `${process.cwd()}/.tmp`;
    if(!fs.existsSync(tmpPath))
        fs.mkdirSync(tmpPath);
    const path: string = `${tmpPath}/dw`
    if(!fs.existsSync(path))
        fs.mkdirSync(path);
    console.log(`Cleaning directory ${path}`);
    fs.readdirSync(path).forEach(f=>fs.unlinkSync(f));
    const schemaVersion: string = "1.32.0";
    const jarFile: string = ` https://nexus.rcsb.org/repository/maven-releases/org/rcsb/rcsb-mojave-model/${schemaVersion}/rcsb-mojave-model-${schemaVersion}.jar`;
    const downloader: Downloader = new Downloader({
        url: jarFile,
        directory: path
    });
    console.log(`Downloading ${jarFile}`);
    await downloader.download();
    const fileName: string = `rcsb-mojave-model-${schemaVersion}.jar`;
    console.log(`Extracting ${path}/${fileName}`)
    await extract(`${path}/${fileName}`, {dir:path});
    fs.readdirSync(path).filter(f=>!f.includes("json")).forEach(f=>fs.unlinkSync(f));
}

exec().then(()=>{
    console.log("DW schemas OK");
})