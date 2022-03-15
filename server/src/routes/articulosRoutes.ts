import {Router} from 'express'
import { articulosController} from '../controllers/articulos.controller'

class ArticulosRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',articulosController.articulos);
        this.router.get('/:id',articulosController.getOne);
        this.router.post('/',articulosController.create);
        this.router.delete('/:id',articulosController.delete);
        this.router.put('/:id',articulosController.update);
    }
}

const articulos = new ArticulosRoutes();
export default articulos.router;