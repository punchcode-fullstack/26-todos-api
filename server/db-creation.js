// https://stackoverflow.com/questions/28558920/postgresql-foreign-key-syntax

// Users:
// id
// email
// password
// salt

// Post

// - a user has many posts
// - a post hasOne user

import sha512 from 'js-sha512'
import conn from './db.js'
import { createSalt } from './utils/auth'

// NOTE this order does not matter if cascade deletion is set otherwise this is the order it'd need to be
// due to foreign key reference issue during deletion
const tables = [
    'users',
    'posts'
]
async function main() {
    for (let table of tables) {
        const hasTable = await conn.schema.hasTable(table)
        if (hasTable) {
            await conn.schema.dropTable(table)
        }
    }
    await conn.schema.createTable(`users`, (table) => {
        table.increments('id')
        table.string('username', 45)
        table.string('password', 128)
        table.string('salt', 20)
    })
    await conn.schema.createTable(`posts`, (table) => {
        table.increments('id')
        table.string('title', 45)
        table.string('body', 45)
        table.string('slug', 20)
        table.foreign('user_id').references('users.id').onDelete('cascade')
    })
    const salt = createSalt(20)
    await conn('users').insert({username: 'test', password: sha512('test' + salt), salt: salt})
    await conn('posts').insert({title: 'test', body: 'body', slug: 'example', user_id: 1})
    process.exit()
}
main()

// respective sql below...