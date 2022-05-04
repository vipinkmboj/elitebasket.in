var express = require('express');

var router = express.Router();
var contactModel = require('../models/contactschema');


//var contactModel = require('../models/contactschema');
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
    res.render('contact', { title: 'Elite Basket', msg: '' });
  }
  
});
//contact

router.post('/', function(req, res, next) {
  var contactDetails = new contactModel({
    FirstName: req.body.firstname,
    LastName: req.body.lastname,
    MobileNumber: req.body.mobilenumber,
    Email: req.body.email,
    Message: req.body.writemessage
  });
  contactDetails.save((err) => {
    if(err) {
      res.render('contact', { title: 'Elite Basket', msg: 'Message Not Sent, Try Again!' });

    } 
    res.render('index', { title: 'Elite Basket', msg: 'Message Submited Successfully! We will contact you soon!' });

  });
  //res.render('contact', { title: 'Elite Basket', msg: '' });
});


module.exports = router;
