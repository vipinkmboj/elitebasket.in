var express = require('express');
var router = express.Router();

var signUpModel = require('../models/signupschema');

//Middlewares
function checkExistingUsername(req, res, next) {
  var getUsername = signUpModel.findOne({Username: req.body.username});
  getUsername.exec((err, userNameData) => {
    if(err) {
      res.render('signupadmin', { title: 'Elite Basket', msg: '' });
    }
    if(userNameData != null) {
      res.render('signupadmin', { title: 'Elite Basket', msg: 'Username Already Exists' });

    } else {
      next();
    }
  });
}

function checkExistingMobileNumber(req, res, next) {
  var getMobileNumber = signUpModel.findOne({MobileNumber: req.body.mobilenumber});
  getMobileNumber.exec((err, mobileNumberData) => {
    if(err) {
      res.render('signupadmin', { title: 'Elite Basket', msg: '' });
    }
    if(mobileNumberData != null) {
      res.render('signupadmin', { title: 'Elite Basket', msg: 'Mobile Number Already Exists' });

    } else {
      next();
    }
  });
}

function checkExistingEmail(req, res, next) {
  var getEmail = signUpModel.findOne({Email: req.body.email});
  getEmail.exec((err, emailData) => {
    if(err) {
      res.render('signupadmin', { title: 'Elite Basket', msg: '' });
    }
    if(emailData != null) {
      res.render('signupadmin', { title: 'Elite Basket', msg: 'Email Already Exists' });

    } else {
      next();
    }
  });
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Elite Basket', msg: '' });
});

router.post('/signupadmin', checkExistingUsername, checkExistingMobileNumber, checkExistingEmail, function(req, res, next) {

  var password = req.body.password;
  var confirmPassword = req.body.confirmpassword;

  if(password != confirmPassword) {
    res.render('signupadmin', { title: 'Elite Basket', msg: 'Passwords Not Matched!' });

  } else {
    var signUpDetail = new signUpModel({
      FirstName: req.body.firstname,
      LastName: req.body.lastname,
      MobileNumber: req.body.mobilenumber,
      Email: req.body.email,
      Username: req.body.username,
      Password: password,
  
    });
    signUpDetail.save((err) => {
      if(err) {
        res.render('signupadmin', { title: 'Elite Basket', msg: 'Error Occured, Try Again!' });

      }
      res.render('index', { title: 'Elite Basket', msg: 'Sign Up Successful! You may Sign in Now!' });
    });
  }
  
  //res.render('index', { title: 'Elite Basket', msg: '' });
});

module.exports = router;
