const express = require('express')

const booksRoutes = require('./../controllers/books-controller.js')

const router = express.Router()

// In server.js, books route is specified as '/books'
// this means that '/all' translates to '/books/all'
// & that '/create' translates to '/books/create'
// & that '/delete' translates to '/books/delete'
// & that '/reset' translates to '/books/reset'

// Add route for GET request to retrieve all book
router.get('/all', booksRoutes.booksAll)

// Add route for POST request to create new book
router.post('/create', booksRoutes.booksCreate)

// Add route for PUT request to delete specific book
router.put('/delete', booksRoutes.booksDelete)

// Add route for PUT request to reset bookshelf list
router.put('/reset', booksRoutes.booksReset)

module.exports = router