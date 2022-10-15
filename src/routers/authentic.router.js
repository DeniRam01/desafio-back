
import express from 'express'
import * as authenticUseCase from '../useCases/authentic.useCase.js'

const router = express.Router()

router.post('/login', async(request, response) => {
    try {
        const { email, password } = request.body

        const token = await authenticUseCase.login(email, password)

        response.json({
            success: true,
            token
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