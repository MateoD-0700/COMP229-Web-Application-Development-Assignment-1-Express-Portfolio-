var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Home', });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', 
  { title: 'About Us', });
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('index', 
  { title: 'Products', });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', 
  { title: 'Services', });
});


/* GET contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', 
  { title: 'Contact Us', });
});

module.exports = router;
