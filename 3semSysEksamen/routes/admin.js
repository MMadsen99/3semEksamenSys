var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res,) {
  res.send("hej");
});

module.exports = router;
