"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const articulosRoutes_1 = __importDefault(require("./routes/articulosRoutes"));
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
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/articulos', articulosRoutes_1.default);
    }
    //Con el puerto asignado se le dice al modulo app que escuche un puerto por defecto o use el puerto tres mil
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en el puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
