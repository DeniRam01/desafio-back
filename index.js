/*
Punto de inicio de la aplicacion - entrypoint
-Conectar la BD
-levantar el server 
*/ 

import dbConnect from './src/libs/database.js'
import {server} from './src/server.js' 

dbConnect() //Regresa una promesa porque es una funcion 
    .then(() => {
        console.log('Database connected')
        server.listen(8080, () => {
            console.log('server listenig on port 8080')
        })
    })
    .catch((error) => console.error('Error: ',error))
