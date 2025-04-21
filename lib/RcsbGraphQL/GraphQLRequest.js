import { __awaiter } from "tslib";
import { GraphQLClient } from "graphql-request";
import configBorregoGraphQL from "./ServerConfig/codegen.borrego.json";
import configYosemiteGraphQL from "./ServerConfig/codegen.yosemite.json";
import { LocalStorageTools as LST } from "../RcsbLocalStorage/LocalStorageTools";
export class GraphQLRequest {
    constructor(api, config) {
        switch (api) {
            case "data-api":
                this.client = new GraphQLClient(configYosemiteGraphQL.schema, config);
                break;
            case "sequence-coordinates":
            case "1d-coordinates":
                this.client = new GraphQLClient(configBorregoGraphQL.schema, config);
                break;
            default:
                this.client = new GraphQLClient(api, config);
                break;
        }
    }
    request(requestConfig, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const localObj = LST.getItem({ query, requestConfig });
            if (localObj)
                return localObj;
            try {
                const result = yield this.client.request(query, requestConfig, headers);
                LST.setItem({ query, requestConfig }, result);
                return result;
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
}
//# sourceMappingURL=GraphQLRequest.js.map