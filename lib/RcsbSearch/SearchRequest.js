import { __awaiter } from "tslib";
import * as serverSearch from "./ServerConfig/codegen.search.json";
import { LocalStorageTools as LST } from "../RcsbLocalStorage/LocalStorageTools";
export class SearchRequest {
    constructor(uri, externalFetch, requestConfig) {
        var _a, _b;
        this.uri = uri !== null && uri !== void 0 ? uri : serverSearch.uri;
        this.requestConfig = requestConfig !== null && requestConfig !== void 0 ? requestConfig : {};
        if (typeof externalFetch === "function")
            this.fetch = externalFetch;
        else
            this.fetch = (_b = (_a = globalThis.window) === null || _a === void 0 ? void 0 : _a.fetch) !== null && _b !== void 0 ? _b : fetch;
        if (!this.fetch)
            throw "ERROR: fetch function was not provided";
    }
    request(query_1) {
        return __awaiter(this, arguments, void 0, function* (query, headers = {}) {
            var _a, _b;
            const localObj = LST.getItem(query);
            if (localObj)
                return localObj;
            //TODO this fetch call is needed to avoid the error [TypeError: 'fetch' called on an object that does not implement interface Window.]
            const response = yield ((_b = (_a = globalThis.window) === null || _a === void 0 ? void 0 : _a.fetch) !== null && _b !== void 0 ? _b : this.fetch)(this.uri, Object.assign(Object.assign({}, this.requestConfig), { method: 'POST', body: JSON.stringify(query), headers: Object.assign(Object.assign(Object.assign({}, this.requestConfig.headers), headers), { 'Content-Type': 'application/json' }) }));
            try {
                const queryResult = yield response.json();
                LST.setItem(query, queryResult);
                return queryResult;
            }
            catch (e) {
                console.error(e);
                console.error(response);
                return null;
            }
        });
    }
}
//# sourceMappingURL=SearchRequest.js.map