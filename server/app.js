import './config.js'
import express from 'express'
import authRoutes from './routes/auth.js'
import postRoutes from './routes/posts.js'
import protectedExample from './routes/protectedExample.js'
import todosRoutes from './routes/todos.js'
import { attachUser, unauthorizedError } from './middleware/auth.js'
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(attachUser)
app.use('/api', authRoutes)
app.use('/api', todosRoutes)
// app.use('/api', postRoutes)
// app.use('/api', protectedExample)
app.use(unauthorizedError)
app.listen(3001, () => {
    console.log('listening on port 3001')
})