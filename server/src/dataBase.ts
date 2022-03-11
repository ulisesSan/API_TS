import mysql from 'promise-mysql';
import keys from './keys'


const pool = mysql.createPool(keys.database);
//Si encuentras problemas al iniciar el pool es un problema con la version, solo instalala con npm i promise-mysql@3.3.1
pool.getConnection()
    .then(connection =>{
        pool.releaseConnection(connection);
        console.log(connection)
    }
);

export default pool