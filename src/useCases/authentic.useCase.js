import { User } from "../models/users.models.js"
import jwt from "../libs/jwt.js"
import bcrypt from "../libs/bcrypt.js"

async function login(email, password) {
  const userFound = await User.findOne({email}); //Este solo va a regresar el primero que encuentre osea un objeto
  if (!userFound) throw new Error("email invalido"); //Aqui si encuentra el correo arroja un error

  //validar pasword
  const validPassword = await bcrypt.compare(password, userFound.password); //Es una promesa en la que comparo la contraseña ingresada con la existente en la base de datos
  if (!validPassword) throw new Error("Contraseña incorrecta");

  //Retorna el token
  return jwt.sign({id: userFound._id}) //Como parametro debe recibir el payload, en este caso ya se puede pasar el usuario
}

export {login}
