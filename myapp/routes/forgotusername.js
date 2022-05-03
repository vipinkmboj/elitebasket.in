var express = require('express');
var router = express.Router();
//Require bcrypt to encrypt password
//var bcrypt = require('bcryptjs');
var customerModel = require('../models/customersignupschema');
var employeeModel = require('../models/employeessignupschema');
var adminModel = require('../models/adminschema');
//var adminModule = require('../modules/adminschema');

// require dot env
require('dotenv').config();
//encrypt passwords using bcrypt
var bcrypt = require('bcryptjs');
//Crypto for creating randombytes key
var crypto = require('crypto');
//nodemailer for sending emails from website to clients
//var nodemailer = require('nodemailer');
//const e = require('express');

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
    res.render('forgotusername', { title: 'Quick Website', msg:''});
  }  
});


module.exports = router;
