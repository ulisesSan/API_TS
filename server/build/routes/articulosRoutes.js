"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articulos_controller_1 = require("../controllers/articulos.controller");
class ArticulosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', articulos_controller_1.articulosController.articulos);
        this.router.get('/:id', articulos_controller_1.articulosController.getOne);
        this.router.post('/', articulos_controller_1.articulosController.create);
        this.router.delete('/:id', articulos_controller_1.articulosController.delete);
        this.router.put('/:id', articulos_controller_1.articulosController.update);
    }
}
const articulos = new ArticulosRoutes();
exports.default = articulos.router;
