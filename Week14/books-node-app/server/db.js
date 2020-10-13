/* const { exists } = require('fs') */
const path = require('path')

const dbPath = path.resolve(__dirname, 'db/database.sqlite')

//creates the connection to the SQLite database
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true
})

knex.schema
  // Make sure no "books" table exists
  // before trying to create new
  .hasTable('books')
    .then((exists) => {
      if (!exists) {
        return knex.schema.createTable('books', (table)  => {
          table.increments('id').primary()
          table.integer('author')
          table.string('title')
          table.string('pubDate')
          table.integer('rating')
        })
        .then(() => {
          console.log('Well done as Table \'Books\' created')
        })
        .catch((error) => {
          console.error(`Ohnoes there was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      console.log('You did a success')
    })
    .catch((error) => {
      console.error(`Darn it there was an error setting up the database: ${error}`)
    })

    knex.select('*').from('books')
        .then(data => console.log('ur data is:', data))
        .catch(error => console.log(error))

    module.exports = knex