import {Request,Response} from 'express'

class IndexController {

    public index(req: Request, res: Response ){
        res.json({text: 'Api responde adecuadamente'})
    }
}

export const indexController = new IndexController();