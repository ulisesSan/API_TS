import express, { Application } from 'express';

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
    }

    routes(): void{

    }
    //Con el puerto asignado se le dice al modulo app que escuche un puerto por defecto o use el puerto tres mil
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en el pueto', this.app.get('port'))
        })
    }
}

const server = new Server();

server.start();