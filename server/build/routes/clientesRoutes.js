"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientesController_1 = require("../controllers/clientesController");
class ClientesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', clientesController_1.clientesController.clientes);
        this.router.get('/:id', clientesController_1.clientesController.getOne);
        this.router.post('/', clientesController_1.clientesController.create);
        this.router.delete('/:id', clientesController_1.clientesController.delete);
        this.router.put('/:id', clientesController_1.clientesController.update);
    }
}
const clientes = new ClientesRoutes();
exports.default = clientes.router;
