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
exports.clientesController = void 0;
const dataBase_1 = __importDefault(require("../dataBase"));
class ClientesController {
    clientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientes = yield dataBase_1.default.query('SELECT * FROM clientes');
            res.json({ clientes });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resultado = yield dataBase_1.default.query("select * from clientes where id = ?", [id]);
            res.json({ resultado });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dataBase_1.default.query("INSERT INTO clientes set ?", [req.body]);
            res.json({ message: 'Articulo guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield dataBase_1.default.query('Delete From clientes where id = ?', [id]);
            res.json({ message: "Cliente eliminado" });
        });
    }
    update(req, res) {
        res.json({ text: 'Hola. actualizando Cliente ' + req.params.id });
    }
}
exports.clientesController = new ClientesController();
