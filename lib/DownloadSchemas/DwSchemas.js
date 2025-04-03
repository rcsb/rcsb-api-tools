import { __awaiter } from "tslib";
import * as fs from "fs";
import extract from "extract-zip";
import Downloader from "nodejs-file-downloader";
import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import { XMLParser } from "fast-xml-parser";
function remove(path) {
    if (fs.lstatSync(path).isDirectory())
        fs.rmSync(path, { recursive: true });
    else
        fs.unlinkSync(path);
}
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
const optionDefinitions = [{ name: 'schema-version' }, { name: 'help' }];
const options = commandLineArgs(optionDefinitions);
if ('help' in options) {
    console.log(commandLineUsage(sections));
    process.exit(0);
}
if (!options["schema-version"]) {
    console.error("ERROR: missing schema-version. Use: ts-node src/DownloadSchemas/DwSchemas.ts --schema-version <version-tag>");
    process.exit(-1);
}
function getMavenPath(schemaVersion) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const metadataPath = `https://nexus.rcsb.org/repository/maven-public/org/rcsb/rcsb-mojave-model/${schemaVersion}/maven-metadata.xml`;
        const response = yield fetch(metadataPath);
        const xml = yield response.text();
        const parser = new XMLParser();
        const jObj = parser.parse(xml);
        const version = (_d = (_c = (_b = (_a = jObj === null || jObj === void 0 ? void 0 : jObj.metadata) === null || _a === void 0 ? void 0 : _a.versioning) === null || _b === void 0 ? void 0 : _b.snapshotVersions.snapshotVersion) === null || _c === void 0 ? void 0 : _c.filter((e) => e.extension === 'jar')[0]) === null || _d === void 0 ? void 0 : _d.value;
        if (!version) {
            console.error(`Fatal error: Snapshot version ${schemaVersion} not found`);
            process.exit(-1);
        }
        return { url: `https://repo1.maven.org/maven2/org/rcsb/rcsb-mojave-model/${schemaVersion}/rcsb-mojave-model-${version}.jar`, version: version };
    });
}
function getJarPath(schemaVersion) {
    return __awaiter(this, void 0, void 0, function* () {
        if (schemaVersion.includes("SNAPSHOT")) {
            return yield getMavenPath(schemaVersion);
        }
        else {
            return { url: `https://repo1.maven.org/maven2/org/rcsb/rcsb-mojave-model/${schemaVersion}/rcsb-mojave-model-${schemaVersion}.jar`, version: schemaVersion };
        }
    });
}
function exec(schemaVersion) {
    return __awaiter(this, void 0, void 0, function* () {
        const cwd = process.cwd();
        const tmpPath = `${cwd}/.tmp`;
        if (!fs.existsSync(tmpPath))
            fs.mkdirSync(tmpPath);
        const path = `${tmpPath}/dw`;
        if (!fs.existsSync(path))
            fs.mkdirSync(path);
        console.log(`Cleaning directory ${path}`);
        fs.readdirSync(path).forEach(f => remove(`${path}/${f}`));
        const { url, version } = yield getJarPath(schemaVersion);
        const downloader = new Downloader({
            url: url,
            directory: path
        });
        console.log(`Downloading ${url}`);
        try {
            yield downloader.download();
        }
        catch (e) {
            console.error(`Fatal error: File ${url} not found`);
            process.exit(-1);
        }
        const fileName = `rcsb-mojave-model-${version}.jar`;
        console.log(`Extracting ${path}/${fileName}`);
        yield extract(`${path}/${fileName}`, { dir: path });
        fs.readdirSync(path).filter(f => !f.includes("json")).forEach(f => remove(`${path}/${f}`));
        fs.readdirSync(path).filter(f => f.includes("validation-")).forEach(f => remove(`${path}/${f}`));
        console.log("Copying files");
        fs.readdirSync(path).forEach(f => fs.copyFileSync(`${path}/${f}`, `${cwd}/schemas/dw_schema/${f}`));
    });
}
exec(options["schema-version"]).then(() => {
    console.log("DW schemas OK");
    process.exit(0);
});
//# sourceMappingURL=DwSchemas.js.map