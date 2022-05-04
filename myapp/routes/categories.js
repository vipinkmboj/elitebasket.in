var express = require('express');
var router = express.Router();

var categoryModel = require('../models/categoryschema');
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
    var getAllCategories = categoryModel.find({});
    getAllCategories.exec((err, allCategoriesData) => {
      if(err) {
        res.render('categories', { title: 'Elite Basket', msg: '', allCategoriesData: '' });
      }
      if(allCategoriesData != null) {
        res.render('categories', { title: 'Elite Basket', msg: '', allCategoriesData: allCategoriesData });
      } else {
        res.render('categories', { title: 'Elite Basket', msg: 'No Category Available', allCategoriesData: '' });
      }
    });
    //res.render('categories', { title: 'Elite Basket', msg: '' });
  }
  
});

module.exports = router;
