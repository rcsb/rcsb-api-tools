"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLRequest = void 0;
const tslib_1 = require("tslib");
const graphql_request_1 = require("graphql-request");
const configBorregoGraphQL = tslib_1.__importStar(require("./ServerConfig/codegen.borrego.json"));
const configYosemiteGraphQL = tslib_1.__importStar(require("./ServerConfig/codegen.yosemite.json"));
const LocalStorageTools_1 = require("../RcsbLocalStorage/LocalStorageTools");
class GraphQLRequest {
    constructor(api, config) {
        switch (api) {
            case "data-api":
                this.client = new graphql_request_1.GraphQLClient(configYosemiteGraphQL.schema, config);
                break;
            case "sequence-coordinates":
            case "1d-coordinates":
                this.client = new graphql_request_1.GraphQLClient(configBorregoGraphQL.schema, config);
                break;
            default:
                this.client = new graphql_request_1.GraphQLClient(api, config);
                break;
        }
    }
    request(requestConfig, query, headers) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const localObj = LocalStorageTools_1.LocalStorageTools.getItem({ query, requestConfig });
            if (localObj)
                return localObj;
            try {
                const result = yield this.client.request(query, requestConfig, headers);
                LocalStorageTools_1.LocalStorageTools.setItem({ query, requestConfig }, result);
                return result;
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
}
exports.GraphQLRequest = GraphQLRequest;
