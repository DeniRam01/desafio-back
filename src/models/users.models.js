import mongoose from "mongoose"

const userSchema = new mongoose.Schema({ //recibirá un objeto
    name: {
        type: String, 
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true //si este nombre viene con espacios al principio y al final que los borre
    },
    email: {
        type: String, 
        required: true,
        trim: true,
        match: /.*.@.*\..*/
    },
    password: {
        type: String, 
        required: true,

    }
})

/*Regex nos permiten trabajar con patrones sobre texto
Normalmente van entre /regex/ 

*/


const User = mongoose.model('user', userSchema)
export {User}