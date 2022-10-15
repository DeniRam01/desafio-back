import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()
const {JWT_SECRET} = process.env

function sign(payload){ //Funcion de generar token 
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d'})
}
function verify(token) { //Verificar que el token sea valido
    return jwt.verify(token, JWT_SECRET)
}

export default{
    ...jwt,
    sign,
    verify
}
//Al importarlo se tiene que hacer referencia al archivo y no al npm bcrypt
