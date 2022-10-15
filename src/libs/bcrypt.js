import bcrypt from 'bcrypt'

const saltRounds = 10 //nos permite calcular el valor del hash asociado 

function hash(plainText) {  //Esta funcion para poder encriptar necesita el texto plano
    return bcrypt.hash(plainText, saltRounds)  //Me regresa una promesa

}
export default{ 
    ...bcrypt, //Son todas las funciones que tenga bcrypt
    hash
}
//Al importarlo se tiene que hacer referencia al archivo y no al npm bcrypt