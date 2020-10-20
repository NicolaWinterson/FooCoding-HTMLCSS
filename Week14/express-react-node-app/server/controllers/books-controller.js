/* const { request, response } = require('express')*/
const knex = require('./../db')

//Retreive ALL the books
exports.booksAll = async (req, res) => {
    knex
      .select('*')
      .from('books')
      .then(userData => {
        res.json(userData)
      })
      .catch(error => {
        res.json({ message: `There was an error retrieving books: ${error}` })
      })
}

//Creates a new book
exports.booksCreate = async (req, res) => {
    knex('books')
        .insert({
            'author': req.body.author,
            'title': req.body.title,
            'pubDate': req.body.pubDate,
            'rating': req.body.rating
        })
        .then(() => {
            res.json({ message: `Book \'${req.body.title}\' by ${req.body.author} has been created.` })
        })
        .catch(error => {
            res.json({ message: `There was an error creating ${req.body.title} book: ${error}` })
        })
}

//Deletes a specific book
exports.booksDelete = async (req, res) => {
    knex('books')
        .where('id', req.body.id)
        .del()
        .then(() => {
            res.json({ message: `Book ${req.body.id} was deleted.` })
        })
        .catch(error => {
            res.json({ message: `There was a problem deleting ${req.body.id} book: ${error}` })
        })
}

//Deletes ALL the books
exports.booksReset = async (req, res) => {
    knex
        .select('*')
        .from('books')
        .truncate()
        .then(() => {
            res.json({ message: 'Book list cleared.' })
        })
        .catch(error => {
            res.json({ message: `There was a problem clearing book list: ${error}`})
        })
}