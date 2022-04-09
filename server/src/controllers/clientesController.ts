import {Request,Response} from 'express'

import db from '../dataBase'

class ClientesController {

    public async clientes(req: Request, res: Response ){
        const clientes = await db.query('SELECT * FROM clientes');

        res.json({clientes});
    }

    public async getOne(req: Request, res: Response ){
        const {id} = req.params;
        const resultado = await db.query("select * from clientes where id = ?", [id]);
        res.json({resultado});
    }

    public async create (req: Request, res: Response):Promise<void>
    {
        await db.query("INSERT INTO clientes set ?", [req.body]);
        res.json({message: 'Articulo guardado'})
    }
    public async delete (req: Request, res: Response)
    {
        const {id} =req.params;
        await db.query('Delete From clientes where id = ?',[id]);
        res.json({message: "Cliente eliminado"});
    }
    public update (req: Request, res: Response)
    {
        res.json({text: 'Hola. actualizando Cliente ' + req.params.id});
    }

}

export const clientesController = new ClientesController();