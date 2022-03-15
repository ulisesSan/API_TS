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
exports.articulosController = void 0;
const dataBase_1 = __importDefault(require("../dataBase"));
class ArticulosController {
    articulos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield dataBase_1.default.query('SELECT * FROM producto');
            res.json({ productos });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resultado = yield dataBase_1.default.query("select * from producto where id = ?", [id]);
            res.json({ resultado });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dataBase_1.default.query("INSERT INTO producto set ?", [req.body]);
            res.json({ message: 'Articulo guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield dataBase_1.default.query('Delete From producto where id = ?', [id]);
            res.json({ message: "Elemento eliminado" });
        });
    }
    update(req, res) {
        res.json({ text: 'Hola. actualizando articulo ' + req.params.id });
    }
}
exports.articulosController = new ArticulosController();
