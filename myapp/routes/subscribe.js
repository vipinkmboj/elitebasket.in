var express = require('express');
var router = express.Router();

var subscribeModel = require('../models/subscribeschema');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('subscribe', { title: 'Elite Basket', msg: '' });
});

router.post('/', function(req, res, next) {
  var subscriptionDetail = new subscribeModel({
    FullName: req.body.fullname,
    Email: req.body.email,
    MobileNumber: req.body.mobile
  });
  subscriptionDetail.save((err) => {
    if(err) {
      res.render('index', { title: 'Elite Basket', msg: 'Details not submitted, Try Again!' });

    }
    res.render('subscribe', { title: 'Elite Basket', msg: 'Subscribed Successfully!' });

  });
  //res.render('subscribe', { title: 'Elite Basket', msg: '' });
});

module.exports = router;
