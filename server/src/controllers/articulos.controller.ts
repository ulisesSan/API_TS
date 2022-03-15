import {Request,Response} from 'express'

import db from '../dataBase'

class ArticulosController {

    public async articulos(req: Request, res: Response ){
        const productos = await db.query('SELECT * FROM producto');

        res.json({productos});
    }

    public async getOne(req: Request, res: Response ){
        const {id} = req.params;
        const resultado = await db.query("select * from producto where id = ?", [id]);
        res.json({resultado});
    }

    public async create (req: Request, res: Response):Promise<void>
    {
        await db.query("INSERT INTO producto set ?", [req.body]);
        res.json({message: 'Articulo guardado'})
    }
    public async delete (req: Request, res: Response)
    {
        const {id} =req.params;
        await db.query('Delete From producto where id = ?',[id]);
        res.json({message: "Elemento eliminado"});
    }
    public update (req: Request, res: Response)
    {
        res.json({text: 'Hola. actualizando articulo ' + req.params.id});
    }

}

export const articulosController = new ArticulosController();