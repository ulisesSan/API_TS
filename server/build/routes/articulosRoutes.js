"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ArticulosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('hello articulos'));
    }
}
const articulos = new ArticulosRoutes();
exports.default = articulos.router;
