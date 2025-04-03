import simpleGit from 'simple-git';
import fs from "fs";
import fse from "fs-extra";
import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
const sections = [
    {
        header: 'Search API schema downloader',
        content: 'Download and extract Search API schemas from the rcsb-arches git repo.'
    },
    {
        header: 'Options',
        optionList: [
            {
                name: 'branch-name',
                description: 'rcsb-arches branch name.'
            },
            {
                name: 'help',
                typeLabel: ' ',
                description: 'Print this usage guide.'
            }
        ]
    }
];
const optionDefinitions = [{ name: 'branch-name' }, { name: 'help' }];
const options = commandLineArgs(optionDefinitions);
if ('help' in options) {
    console.log(commandLineUsage(sections));
    process.exit(0);
}
if (!options["branch-name"]) {
    console.error("ERROR: missing branch-name. Use: ts-node src/DownloadSchemas/SearchSchemas.ts --branch-name <name>");
    process.exit(-1);
}
const branchName = options["branch-name"];
const rcsbArches = "git@github.com:rcsb/rcsb-arches.git";
const cwd = process.cwd();
const tmpPath = `${cwd}/.tmp`;
if (!fs.existsSync(tmpPath))
    fs.mkdirSync(tmpPath);
const path = `${tmpPath}/rcsb-arches`;
if (!fs.existsSync(path)) {
    const options = {
        baseDir: tmpPath,
        binary: 'git'
    };
    const git = simpleGit(options);
    git.clone(rcsbArches);
}
else {
    const options = {
        baseDir: path,
        binary: 'git'
    };
    const git = simpleGit(options);
    git.branch(["--list"]).then((branches) => {
        if (!branches.all.includes(branchName)) {
            git.checkout(`origin/${branchName}`, ["-t"]).then((message) => {
                console.log(message);
                update();
            });
        }
        else {
            git.checkout(branchName).then((message) => {
                console.log(message);
                git.pull().then((result) => {
                    console.info(result);
                    update();
                });
            });
        }
    });
}
function remove(path) {
    console.log(`removing ${path}`);
    if (fs.lstatSync(path).isDirectory())
        fs.rmSync(path, { recursive: true });
    else
        fs.unlinkSync(path);
}
function update() {
    if (fs.existsSync(`${cwd}/schemas/search_schema`)) {
        remove(`${cwd}/schemas/search_schema`);
    }
    console.log(`copy ${path}/src/main/resources/schema to ${cwd}/schemas/search_schema`);
    fse.copySync(`${path}/src/main/resources/schema`, `${cwd}/schemas/search_schema`);
}
//# sourceMappingURL=SearchSchemas.js.map