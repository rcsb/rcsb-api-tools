import * as fs from "fs";
import extract from "extract-zip";
import Downloader from "nodejs-file-downloader";
import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import { XMLParser, XMLBuilder, XMLValidator} from "fast-xml-parser";


function remove(path: string){
    if(fs.lstatSync(path).isDirectory())
        fs.rmSync(path, {recursive:true});
    else
        fs.unlinkSync(path);
}

type optionType = {'schema-version': string; 'help': null;};
const sections = [
    {
        header: 'DW schema downloader',
        content: 'Download and extract DW schemas from the rcsb-mojave-models project released in maven.'
    },
    {
        header: 'Options',
        optionList: [
            {
                name: 'schema-version',
                description: 'rcsb-mojave-models version tag.'
            },
            {
                name: 'help',
                typeLabel: ' ',
                description: 'Print this usage guide.'
            }
        ]
    }
];

const optionDefinitions: { name: keyof optionType}[] = [{name: 'schema-version'},{name: 'help'}];
const options:  optionType = commandLineArgs(optionDefinitions) as optionType;

if('help' in options){
    console.log(commandLineUsage(sections));
    process.exit(0);
}

if(!options["schema-version"]){
    console.error("ERROR: missing schema-version. Use: ts-node src/DownloadSchemas/DwSchemas.ts --schema-version <version-tag>");
    process.exit(-1);
}

async function getMavenPath(schemaVersion: string): Promise<{url:string;version:string;}> {
    const metadataPath: string = `https://nexus.rcsb.org/repository/maven-public/org/rcsb/rcsb-mojave-model/${schemaVersion}/maven-metadata.xml`;
    const response:Response = await fetch(metadataPath);
    const xml: string = await response.text();
    const parser = new XMLParser();
    const jObj = parser.parse(xml);
    const version: string = jObj?.metadata?.versioning?.snapshotVersions.snapshotVersion?.filter((e: {extension:string;value:string;})=>e.extension === 'jar')[0]?.value;
    if(!version){
        console.error(`Fatal error: Snapshot version ${schemaVersion} not found`);
        process.exit(-1);
    }
    return {url: `https://nexus.rcsb.org/repository/maven-public/org/rcsb/rcsb-mojave-model/${schemaVersion}/rcsb-mojave-model-${version}.jar`, version: version};
}

async function getJarPath(schemaVersion: string): Promise<{url:string;version:string;}>{
    if(schemaVersion.includes("SNAPSHOT")){
        return await getMavenPath(schemaVersion);
    }else{
        return {url:`https://nexus.rcsb.org/repository/maven-releases/org/rcsb/rcsb-mojave-model/${schemaVersion}/rcsb-mojave-model-${schemaVersion}.jar`, version:schemaVersion};    }
}

async function exec(schemaVersion: string): Promise<void>{
    const cwd: string = process.cwd();
    const tmpPath: string = `${cwd}/.tmp`;
    if(!fs.existsSync(tmpPath))
        fs.mkdirSync(tmpPath);
    const path: string = `${tmpPath}/dw`
    if(!fs.existsSync(path))
        fs.mkdirSync(path);
    console.log(`Cleaning directory ${path}`);
    fs.readdirSync(path).forEach(f=>remove(`${path}/${f}`));
    const {url,version} = await getJarPath(schemaVersion);
    const downloader: Downloader = new Downloader({
        url: url,
        directory: path
    });
    console.log(`Downloading ${url}`);
    try {
        await downloader.download();
    }catch (e){
        console.error(`Fatal error: File ${url} not found`);
        process.exit(-1);
    }
    const fileName: string = `rcsb-mojave-model-${version}.jar`;
    console.log(`Extracting ${path}/${fileName}`)
    await extract(`${path}/${fileName}`, {dir:path});
    fs.readdirSync(path).filter(f=>!f.includes("json")).forEach(f=>remove(`${path}/${f}`));
    fs.readdirSync(path).filter(f=>f.includes("validation-")).forEach(f=>remove(`${path}/${f}`));
    console.log("Copying files");
    fs.readdirSync(path).forEach(f=>fs.copyFileSync(`${path}/${f}`,`${cwd}/schemas/dw_schema/${f}`))
}

exec(options["schema-version"]).then(()=>{
    console.log("DW schemas OK");
    process.exit(0);
})