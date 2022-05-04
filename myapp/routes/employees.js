var express = require('express');
var router = express.Router();

var categoryModel = require('../models/categoryschema');
/* GET page. */
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
    res.redirect('/');
    //res.render('index', { title: 'Elite Basket', msg: '', allCategoriesData: '' });
  }
  
});

router.post('/', function(req, res, next) {
  if(process.env.EMPLOYEE1PASS == req.body.employeepass) {
    res.render('employees', { title: 'Elite Basket', msg: '', allCategoriesData: ''  });
  } else {
    // Get Categories from database
    var getAllCategories = categoryModel.find({});
    getAllCategories.exec((err, allCategoriesData) => {
      if(err) {
        res.render('index', { title: 'Elite Basket', msg:'Incorrect Employee Pass', allCategoriesData: ''});
      }
      if(allCategoriesData != null) {
        res.render('index', { title: 'Elite Basket', msg:'Incorrect Employee Pass', allCategoriesData: allCategoriesData});
      } else {
        res.render('index', { title: 'Elite Basket', msg:'Incorrect Employee Pass', allCategoriesData: ''});
      }
    });
    //res.render('index', { title: 'Elite Basket', msg: 'Incorrect Employee Pass', allCategoriesData: '' });
  }
 // res.render('employees', { title: 'Elite Basket', msg: '' });
});

module.exports = router;
