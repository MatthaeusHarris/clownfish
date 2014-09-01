var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: process.env.SERVICE_SPECIES, version: process.env.SERVICE_VERSION });
});

module.exports = router;
