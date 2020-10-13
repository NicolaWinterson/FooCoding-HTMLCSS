//Imports the dependencies
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

//Imports the routes
const booksRouter = require('./routes/books-route')

const PORT = process.env.PORT || 4001

const app = express()

//Middleware
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Now time for the routes
app.use('./books', booksRouter)

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Oops something is broken.')
})

app.listen(PORT, function() {
    console.log(`Server is running on: ${PORT}`)
})