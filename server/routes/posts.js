import express from 'express'
const router = express.Router()
import conn from '../db.js'

router.get('/posts', async (req, res) => {
    const posts = await conn.raw(`
        SELECT
        posts.id AS post_id,
        posts.title,
        authors.first_name,
        authors.last_name
        FROM posts
        INNER JOIN authors ON authors.id = posts.author_id;
    `)
    const rows = posts.rows
    res.json(rows)
})

export default router