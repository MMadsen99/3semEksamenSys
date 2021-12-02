var express = require('express');
var router = express.Router();
const path = require('path');
const { post } = require('.');
const app = require('../app');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/../views/adminSite.html'));
});

router.get('/onlineLager', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/../views/adminSiteOnlineLager.html'));
  //res.render("onlineLager");
});


module.exports = router;
