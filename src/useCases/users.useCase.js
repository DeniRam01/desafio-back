import { User } from "../models/users.models.js";
import bcrypt from "../libs/bcrypt.js";

function getUsers() {
  return User.find({}); //Regresa una promesa el .find es metodo de mongo
}

async function createUser(newUser) {
  const { email, password } = newUser; //traemos los valores de email y password a newUser
  //Validacion de email
  const userFound = await User.findOne({ email }); //Este solo va a regresar el primero que encuentre osea un objeto
  if (userFound) throw new Error('Ya esxiste el email en la base de datos') //Aqui si encuentra el correo arroja un error
  //Encriptacion de password
  const encryptedPassword = await bcrypt.hash(password)
  return User.create({...newUser,password: encryptedPassword}) //Para retornarlo en la base de datos 

}


export {getUsers, createUser}
