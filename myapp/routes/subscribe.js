var express = require('express');
var router = express.Router();

var subscribeModel = require('../models/subscribeschema');
/* GET home page. */
router.get('/', function(req, res, next) {
  var loginUser = {
    loginUserCustomer: req.session.customerLoginUserName,//localStorage.getItem('customerLoginUserName'),
    loginUserEmployee: req.session.employeeLoginUserName,//localStorage.getItem('employeeLoginUserName'),
    loginUserAdmin: req.session.adminLoginUserName//localStorage.getItem('adminLoginUserName')

  };
  if(loginUser.loginUserCustomer) {
    res.redirect('dashboardcustomer');
  } else if(loginUser.loginUserEmployee) {
    res.redirect('dashboardemployees');
  } else if(loginUser.loginUserAdmin) {
    res.redirect('dashboardadmin');
  } else {
    res.render('subscribe', { title: 'Elite Basket', msg: '' });
  }
  
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
    res.render('subscribe', { title: 'Elite Basket', msg: 'Subscribed Successfully! You will receive email notifications for our products and promotions' });

  });
  //res.render('subscribe', { title: 'Elite Basket', msg: '' });
});

module.exports = router;
