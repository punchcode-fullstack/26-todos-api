import express from 'express'
const router = express.Router()
import conn from '../db.js'

router.get('/todos', async (req, res) => {
    const todos = await conn.raw(`
        SELECT
        *
        FROM todos
        WHERE user_id = ?;
    `, [1])
    const rows = todos.rows
    res.json(rows)
})

export default router