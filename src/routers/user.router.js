import express from "express"   
import * as usersUseCases from "../useCases/users.useCase.js"

const router = express.Router()

router.get('/',async(request, response) => {
    try {
        const allUsers = await usersUseCases.getUsers()  //Regresa una promesa 
        response.json({
            success: true,
            data: {
                user: allUsers
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
        
    }
})

router.post('/',async(request, response) => {
    try {
        const{ body: newUser } = request //Abstraer la data del body; tambien puede ser const new = request.body
        const userCreated = await usersUseCases.createUser(newUser)  //Regresa una promesa 
        console.log(userCreated)
        
        response.json({
            success: true,
            message: "Nuevo usuario creado",
            data: {
                user: userCreated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
        
    }
})



export default router