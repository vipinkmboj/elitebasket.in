var express = require('express');
var router = express.Router();

var customerModel = require('../models/customersignupschema');
//jwt for creating a token
//var jwt = require('jsonwebtoken');
// require local storage 
/*
if (typeof localStorage === "undefined" || localStorage === null) {
  const LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
*/
//middleware
//Check LoginUser
/*
function checkLoginUser(req, res, next) {
  var getLoginToken = localStorage.getItem('customerLoginTokenName');
  try{
    var decoded = jwt.verify(getLoginToken, process.env.CUSTOMER_LOGIN_TOKEN_ACCESS_KEY);
  }catch(err) {
    res.redirect('/');
  }
  next();
}
*/
/* GET home page. */ //Exactally Correct One
router.get('/',  function(req, res, next) {
  var loginUser = {
    loginUserCustomer: req.session.customerLoginUserName,//localStorage.getItem('customerLoginUserName'),
    loginUserEmployee: req.session.employeeLoginUserName,//localStorage.getItem('employeeLoginUserName'),
    loginUserAdmin: req.session.adminLoginUserName//localStorage.getItem('adminLoginUserName')

  };
  if(loginUser.loginUserCustomer) {
    var customerModelData = customerModel.findOne({Username: loginUser.loginUserCustomer});
    customerModelData.exec((err, currentLogInData) => {
      if(err) {
        res.render('dashboardcustomer', { title: 'Elite Basket', msg:'', loginUser: loginUser.loginUserCustomer, currentLogInData: '' });
      } else {
        res.render('dashboardcustomer', { title: 'Elite Basket', msg:'', loginUser: loginUser.loginUserCustomer, currentLogInData: currentLogInData });
      }
    });
      } else if(loginUser.loginUserEmployee){
    res.redirect('dashboardemployees');
    //res.render('dashboardemployees', { title: 'Front End Web Developer', msg:'', loginUser: loginUser.loginUserEmployee, savedData:'', staffdata: '', staffid: '' });
  } else if(loginUser.loginUserAdmin) {
    /*var getSavedData = adminModule.findOne({Ussername: loginUser.loginUserAdmin});
      getSavedData.exec((err, savedData)=> { 

        if(err) throw err;
        
      res.render('dashboardadmin', { title: 'Frontend Webdeveloper', loginUser: loginUser.loginUserAdmin, staffdata: '', staffid: '', msg: '', file: '', uploadedImage: '', savedData: savedData });
     });
      */
     res.redirect('dashboardadmin');
   // res.render('dashboardtadmin', { title: 'Front End Web Developer', msg:'', loginUser: loginUser.loginUserAdmin});
  } else {
    res.redirect('/');
  }   
});






module.exports = router;
