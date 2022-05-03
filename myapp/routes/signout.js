var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',  function(req, res, next) {
  var loginUserCustomer = req.session.customerLoginUserName;//localStorage.getItem('customerLoginUserName');
  var loginUserEmployee = req.session.employeeLoginUserName;//localStorage.getItem('employeeLoginUserName');
  var loginUserAdmin = req.session.adminLoginUserName;//localStorage.getItem('adminLoginUserName');

  if(loginUserCustomer){
    res.redirect('/dashboardcustomer');
  } else if(loginUserEmployee) {
    res.redirect('/dashboardemployees');
  } else if(loginUserAdmin) {
    res.redirect('/dashboardadmin');
  } else {
    res.render('signout', { title: 'Quick Website', msg:''});
  }  
});


router.post("/", function(req, res, next) {
  req.session.destroy(function(err) {
    if(err) {
      res.redirect('/');
    } else {
      res.render('signout', { title: 'Quick Website', msg:'' });

    }    
  })
  /*
  localStorage.removeItem('customerLoginTokenName');
  localStorage.removeItem('customerLoginUserName');
  localStorage.removeItem('employeeLoginTokenName');
  localStorage.removeItem('employeeLoginUserName');
  localStorage.removeItem('adminLoginTokenName');
  localStorage.removeItem('adminLoginUserName');
  */
  //res.redirect('/');
  });


module.exports = router;
