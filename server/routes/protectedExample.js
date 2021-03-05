import express from 'express'
import jwtMiddleware from 'express-jwt'
const router = express.Router()

router.get(
    '/secret',
    jwtMiddleware({ secret: process.env.SECRET, algorithms: ['HS256'] }),
    (req, res) => {
        // req.user will have the user based on the token signed from login
        res.json({message: 'secret'})
    }
)

export default router