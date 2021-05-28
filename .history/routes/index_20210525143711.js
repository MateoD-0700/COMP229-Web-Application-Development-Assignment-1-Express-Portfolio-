var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Express', });
});

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Express', });
});

/* GET products page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Express', });
});

/* GET services page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Express', });
});

/* GET about us page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Express', });
});

/* GET contact us page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Express', });
});

module.exports = router;
