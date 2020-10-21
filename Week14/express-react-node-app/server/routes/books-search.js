var express = require('express');
var axios = require('axios')
var fs = require('fs')

var router = express.Router();

router.get('/', function (req, res, next) {

  var API_KEY = fs.readFileSync("./environment-keys", 'utf8')

  /* const REACT_APP_API_KEY= process.env.REACT_APP_API */
  /*   console.log("Read API-KEY from file: environment-keys ", typeof API_KEY, API_KEY) */

  let searchTerm = req.query.searchTerm
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}`)
    .then(result => result.data)
    .then(data => {
      console.log("got  many responses:  ", data.totalItems)
      return data.items
    })
    .then(items => {
      // console.log("items:  ", items)
      const books = items.map(item => convertToBook(item))
      console.log("books:  ", books)
      res.json(books);
    })
    .catch(error => console.error(`There was an error retrieving search: ${error}`))

});

function convertToBook(item) {
  console.log("authors:", item.volumeInfo.authors)
  let authors = item.volumeInfo.authors
  let author = ""

  if (authors === undefined) {
    author = ""
  } else {
    author = authors[0]
  }

  return {
    "title": item.volumeInfo.title,
    "author": author,
    "pubDate": item.volumeInfo.publishedDate,
    "thumbnail": item.volumeInfo.imageLinks.smallThumbnail
  };
}

module.exports = router;
