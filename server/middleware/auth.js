import jwtToken from 'jsonwebtoken'
import jwtMiddleware from 'express-jwt'

export function attachUser(req, res, next) {
    const authorizationHeader = req.headers.authorization
    const headerValid = authorizationHeader && authorizationHeader.includes('Bearer')
    if (authorizationHeader && headerValid) {
        const token = authorizationHeader.split(' ')[1]
        if (token === undefined) {
            next()
        }
        const decoded = jwtToken.decode(token)
        if (decoded) {
            req.user = { id: decoded.id, username: decoded.username }
        }
    }
    next()
}

export function unauthorizedError(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({message: 'invalid token'});
      }
}

export function protectRoute(req, res, next) {
    jwtMiddleware({ secret: 'test', algorithms: ['HS256'] })
}