"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTrickandmorty = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.listTrickandmorty = (0, graphql_tag_1.default) `
  query Characters($page: Int, $species: String!) {
    characters(filter: { species: $species }, page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
    }
  }
`;
//# sourceMappingURL=queries.js.map