"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    //el constructor ayuda a inicializar diferentes partes que se necesitan para el servidor 7u7
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    //Se asigna un puerto para que funcione el servidor
    config() {
        this.app.set('port', process.env.PORT || 3000);
    }
    routes() {
    }
    //Con el puerto asignado se le dice al modulo app que escuche un puerto por defecto o use el puerto tres mil
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en el pueto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
