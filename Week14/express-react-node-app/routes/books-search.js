var express = require('express');
var axios = require('axios')
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log("got a request ", req.params)

  axios.get('https://www.googleapis.com/books/v1/volumes?q=quilting&key=AIzaSyB3Mi3c016RPPWHx4c99JacOFmOEEpD0wM')
    .then(result => result.data)
    .then(data => {
      console.log("got  many responses:  ", data.totalItems)
      return data.items
    })
    .then(items => {
      console.log("items:  ", items)
      const books = items.map(item =>  convertToBook(item))
      console.log("books:  ", books)
      res.json(books);
    })
    .catch(error => console.error(`There was an error retrieving search: ${error}`))

});

function convertToBook(item) {
  console.log("authors:" ,item.volumeInfo.authors)
  let authors = item.volumeInfo.authors
  let author = ""

  if (authors === undefined) {
    author= ""
  } else {
    author= authors[0]
  }

  return {
    "title": item.volumeInfo.title,
    "author": author,
    "pubDate": item.volumeInfo.publishedDate, 
    "thumbnail": item.volumeInfo.imageLinks.smallThumbnail
  };
}

module.exports = router;
