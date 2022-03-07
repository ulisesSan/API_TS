import {Router} from 'express'

class IndexRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res ) => res.send('hello world'))
    }
}

const indexRouter = new IndexRoutes();
export default indexRouter.router;