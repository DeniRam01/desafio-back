/*
server:
    Este archivo guardará la definición del server
        - Que middlewares van a usar 
        - Montar los middlewares
        - Montar routers
*/
import express from 'express'
import userRouter from './routers/user.router.js'
import authRouter from './routers/authentic.router.js'
const server = express()
// middlewares
server.use(express.json())
// Routers aqui montamos los routers (?)
server.use('/users', userRouter) //utiliza el server y el primer parametro es como lo mando a llamar en insomnia y el segundo es en donde va buscar ese router
server.use('/auth',authRouter)

// middleware - handleErrors

export {server}