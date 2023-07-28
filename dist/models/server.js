"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const trickandmorty_1 = __importDefault(require("../routes/trickandmorty"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            trickandmorty: "/api/rick-and-mortys",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
        // methods
        this.middlewares();
        this.routes();
    }
    middlewares() {
        // Cors
        this.app.use((0, cors_1.default)());
        // body reading
        this.app.use(express_1.default.json());
        // public folder
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use(this.apiPaths.trickandmorty, trickandmorty_1.default);
    }
    listen() {
        this.app.listen(this.port, () => console.log(`Activo en el puerto ${this.port}`));
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map