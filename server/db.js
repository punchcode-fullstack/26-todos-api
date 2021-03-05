import knex from 'knex'

const db = knex({
    client: 'postgres',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : '',
      database : 'blog'
    }
})

export default db