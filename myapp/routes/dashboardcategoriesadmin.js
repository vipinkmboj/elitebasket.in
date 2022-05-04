var express = require('express');
var router = express.Router();

var categoryModel = require('../models/categoryschema');
/* GET home page. */

    router.get('/',  function(req, res, next) {
        var loginUser = {
          loginUserCustomer: req.session.customerLoginUserName,//localStorage.getItem('customerLoginUserName'),
          loginUserEmployee: req.session.employeeLoginUserName,//localStorage.getItem('employeeLoginUserName'),
          loginUserAdmin: req.session.adminLoginUserName//localStorage.getItem('adminLoginUserName')
      
        };
        if(loginUser.loginUserAdmin) {
            var getAllCategories = categoryModel.find({});
            getAllCategories.exec((err, allCategoriesData) => {
                if(err) {
                    res.render('dashboardcategoriesadmin', {title:'Elite Basket', msg: '', loginUser: loginUser.loginUserAdmin, allCategoriesData: ''})
                }
                if(allCategoriesData != null) {
                    res.render('dashboardcategoriesadmin', {title:'Elite Basket', msg: '', loginUser: loginUser.loginUserAdmin, allCategoriesData: allCategoriesData})
                } else {
                    res.render('dashboardcategoriesadmin', {title:'Elite Basket', msg: 'No Category Available', loginUser: loginUser.loginUserAdmin, allCategoriesData: ''})
                }
            });
            
        } else {
            res.redirect('/');
            //res.render('categories', { title: 'Elite Basket', msg: '', allCategoriesData: allCategoriesData });
        }
  
});

module.exports = router;
