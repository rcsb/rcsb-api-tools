import {generateInterfaces} from "./GeneratorTools";

generateInterfaces(
    "http://132.249.213.110/graphql",
    "src/RcsbGraphQL/Types/Yosemite/GqlTypes.ts",
    "src/RcsbGraphQL/Queries/Yosemite/*.graphql",
    [{
        pluginFile: "src/RcsbGraphQL/Plugins/fullpath_schema_keys.js",
        outputFile: "src/RcsbGraphQL/Types/Yosemite/CorePaths.ts"
    },{
        pluginFile: "src/RcsbGraphQL/Plugins/enumerate_schema_keys.js",
        outputFile: "src/RcsbGraphQL/Types/Yosemite/CoreConstants.ts"
    }]
);

generateInterfaces(
    "https://1d-coordinates.rcsb.org/graphql",
    "src/RcsbGraphQL/Types/Borrego/GqlTypes.ts",
    "src/RcsbGraphQL/Queries/Borrego/*.graphql"
);
