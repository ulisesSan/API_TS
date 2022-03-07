import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import  indexRoutes from './routes/indexRoutes';
import articulosRoutes from './routes/articulosRoutes';

class Server{

    public app: Application;
    //el constructor ayuda a inicializar diferentes partes que se necesitan para el servidor 7u7
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    //Se asigna un puerto para que funcione el servidor
    config(): void{
        this.app.set('port', process.env.PORT || 3000)
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes(): void{
        this.app.use('/',indexRoutes)
        this.app.use('/articulos',articulosRoutes)
    }
    //Con el puerto asignado se le dice al modulo app que escuche un puerto por defecto o use el puerto tres mil
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en el puerto', this.app.get('port'))
        })
    }
}

const server = new Server();

server.start();