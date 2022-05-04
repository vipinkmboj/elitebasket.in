var express = require('express');
var router = express.Router();


var employeesModel = require('../models/employeessignupschema');
/* GET home page. */
/*
router.get('/', function(req, res, next) {
  var loginUserCustomer = req.session.customerLoginUserName;//localStorage.getItem('customerLoginUserName');
    var loginUserEmployee = req.session.employeeLoginUserName;//localStorage.getItem('employeeLoginUserName');
    var loginUserAdmin = req.session.adminLoginUserName;//localStorage.getItem('adminLoginUserName');
    
    if(loginUserEmployee) {
      res.redirect('/dashboardemployees');
    }else {
      res.render('employees', { title: 'Elite Basket', msg:''});
    }
  
});
*/
/* GET home page. */
router.get('/',  function(req, res, next) {
  var loginUser = {
    loginUserCustomer: req.session.customerLoginUserName,//localStorage.getItem('customerLoginUserName'),
    loginUserEmployee: req.session.employeeLoginUserName,//localStorage.getItem('employeeLoginUserName'),
    loginUserAdmin: req.session.adminLoginUserName//localStorage.getItem('adminLoginUserName')

  };
  if(loginUser.loginUserCustomer) {
    res.redirect('dashboardcustomer');
    //res.render('dashboardcustomer', { title: 'Front End Web Developer', msg:'', loginUser: loginUser.loginUserCustomer });
  } else if(loginUser.loginUserAdmin){
    res.redirect('dashboardadmin');
    //res.render('dashboardemployees', { title: 'Front End Web Developer', msg:'', loginUser: loginUser.loginUserEmployee });
  } else if(loginUser.loginUserEmployee) {
    
      res.render('dashboardemployees', { title: 'Elite Basket', loginUser: loginUser.loginUserEmployee, msg: ''});
      
       
   // res.render('dashboardtadmin', { title: 'Front End Web Developer', msg:'', loginUser: loginUser.loginUserAdmin});
  } else {
    res.redirect('employees');
  }   
});
module.exports = router;
