var express = require('express');
var router = express.Router();
//Require bcrypt to encrypt password
//var bcrypt = require('bcryptjs');
//var adminModel = require('../models/adminschema');

// require dot env
require('dotenv').config();
//encrypt passwords using bcrypt
var bcrypt = require('bcryptjs');
//Crypto for creating randombytes key
var crypto = require('crypto');
//nodemailer for sending emails from website to clients
//var nodemailer = require('nodemailer');


/* GET home page. */
router.get('/',  function(req, res, next) {
    var loginUserCustomer = req.session.customerLoginUserName;//localStorage.getItem('customerLoginUserName');
    var loginUserEmployee = req.session.employeeLoginUserName//localStorage.getItem('employeeLoginUserName');
    var loginUserAdmin = req.session.adminLoginUserName//localStorage.getItem('adminLoginUserName');
  
  if(loginUserCustomer){
    res.redirect('/dashboardcustomer');
  } else if(loginUserEmployee) {
    res.redirect('/dashboardemployees');
  } else if(loginUserAdmin) {
    res.redirect('/dashboardadmin');
  } else {
    res.render('forgotpassword', { title: 'Elite Basket', msg:''});
  }  
});


module.exports = router;
