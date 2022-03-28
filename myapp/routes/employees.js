var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Elite Basket', msg: '' });
});

router.post('/', function(req, res, next) {
  if(process.env.EMPLOYEE1PASS == req.body.employeepass) {
    res.render('employees', { title: 'Elite Basket', msg: '' });
  } else {
    res.render('index', { title: 'Elite Basket', msg: 'Incorrect Employee Pass' });
  }
 // res.render('employees', { title: 'Elite Basket', msg: '' });
});

module.exports = router;
