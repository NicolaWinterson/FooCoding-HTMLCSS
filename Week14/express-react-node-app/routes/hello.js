var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 3, username: "you there"}, 
    {id: 4, username: "poop"}
  ]);
});

module.exports = router;
