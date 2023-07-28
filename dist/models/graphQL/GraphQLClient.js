"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeQuery = void 0;
const axios = require("axios");
// @param query - gql query
const makeQuery = (graphqlEndpoint, query, page) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const graphqlData = yield axios({
            url: graphqlEndpoint,
            data: {
                query,
                variables: {
                    page,
                    species: "human",
                },
            },
        });
        return graphqlData.data.data;
    }
    catch (err) {
        console.log("error posting to appsync: ", err);
        throw err;
    }
});
exports.makeQuery = makeQuery;
//# sourceMappingURL=GraphQLClient.js.map