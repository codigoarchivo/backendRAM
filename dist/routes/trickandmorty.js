"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trickandmorty_1 = require("../controllers/trickandmorty");
const router = (0, express_1.Router)();
router.post("/", trickandmorty_1.postTrickandmorty);
exports.default = router;
//# sourceMappingURL=trickandmorty.js.map