import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';
import fs from "fs";
import fse from "fs-extra";

const rcsbArches: string = "git@github.com:rcsb/rcsb-arches.git";
const cwd: string = process.cwd();
const tmpPath: string = `${cwd}/.tmp`;
if(!fs.existsSync(tmpPath))
    fs.mkdirSync(tmpPath);
const options: Partial<SimpleGitOptions> = {
    baseDir: tmpPath,
    binary: 'git'
};
const git: SimpleGit = simpleGit(options);
const path: string = `${tmpPath}/rcsb-arches`
if(!fs.existsSync(path))
    git.clone(rcsbArches);
else
    git.pull();
fse.copySync(`${path}/src/main/resources/schema`, `${cwd}/schemas/search_schema`);