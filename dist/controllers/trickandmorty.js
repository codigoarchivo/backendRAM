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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrickandmortyById = void 0;
const axios_1 = __importDefault(require("axios"));
const queries_1 = require("../models/graphQL/queries");
const graphql = require("graphql");
const { print } = graphql;
const getTrickandmortyById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let page = req.query.page;
    try {
        const { data } = yield (0, axios_1.default)({
            url: (_a = process.env.API_URL) === null || _a === void 0 ? void 0 : _a.toString(),
            method: req.method,
            data: {
                query: print(queries_1.listTrickandmorty),
                headers: { "Content-Type": "application/graphql" },
                variables: {
                    page: Number(page),
                    species: "human",
                },
            },
        });
        res.json(data);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Bad request" });
    }
});
exports.getTrickandmortyById = getTrickandmortyById;
//# sourceMappingURL=trickandmorty.js.map