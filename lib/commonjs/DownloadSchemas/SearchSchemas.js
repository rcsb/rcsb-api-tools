"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const simple_git_1 = tslib_1.__importDefault(require("simple-git"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
const command_line_args_1 = tslib_1.__importDefault(require("command-line-args"));
const command_line_usage_1 = tslib_1.__importDefault(require("command-line-usage"));
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
const options = (0, command_line_args_1.default)(optionDefinitions);
if ('help' in options) {
    console.log((0, command_line_usage_1.default)(sections));
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
if (!fs_1.default.existsSync(tmpPath))
    fs_1.default.mkdirSync(tmpPath);
const path = `${tmpPath}/rcsb-arches`;
if (!fs_1.default.existsSync(path)) {
    const options = {
        baseDir: tmpPath,
        binary: 'git'
    };
    const git = (0, simple_git_1.default)(options);
    git.clone(rcsbArches);
}
else {
    const options = {
        baseDir: path,
        binary: 'git'
    };
    const git = (0, simple_git_1.default)(options);
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
    if (fs_1.default.lstatSync(path).isDirectory())
        fs_1.default.rmSync(path, { recursive: true });
    else
        fs_1.default.unlinkSync(path);
}
function update() {
    if (fs_1.default.existsSync(`${cwd}/schemas/search_schema`)) {
        remove(`${cwd}/schemas/search_schema`);
    }
    console.log(`copy ${path}/src/main/resources/schema to ${cwd}/schemas/search_schema`);
    fs_extra_1.default.copySync(`${path}/src/main/resources/schema`, `${cwd}/schemas/search_schema`);
}
