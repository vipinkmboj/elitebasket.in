var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signupadmin', { title: 'Elite Basket', msg: '' });
});

module.exports = router;
