var express = require('express');
var router = express.Router();

require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Elite Basket', msg: '' });

  
});

router.post('/', function(req, res, next) {
  if(process.env.PASS == req.body.adminpass) {
    res.render('admin', { title: 'Elite Basket', msg: '' });
  } else {
    res.render('index', { title: 'Elite Basket', msg: 'Incorrect Admin Pass' });
  }
  

  
});

module.exports = router;
