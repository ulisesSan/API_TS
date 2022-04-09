import {Router} from 'express'
import { clientesController} from '../controllers/clientesController'

class ClientesRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', clientesController.clientes);
        this.router.get('/:id', clientesController.getOne);
        this.router.post('/', clientesController.create);
        this.router.delete('/:id', clientesController.delete);
        this.router.put('/:id', clientesController.update);
    }
}

const clientes = new ClientesRoutes();
export default clientes.router;