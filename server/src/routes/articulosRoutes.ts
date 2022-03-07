import {Router} from 'express'

class ArticulosRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res ) => res.send('hello articulos'))
    }
}

const articulos = new ArticulosRoutes();
export default articulos.router;