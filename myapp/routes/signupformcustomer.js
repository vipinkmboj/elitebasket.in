var express = require('express');
var router = express.Router();

// require dot env
/*
require('dotenv').config();
//Crypto for creating randombytes key
var crypto = require('crypto');
//nodemailer for sending emails from website to clients
// var nodemailer = require('nodemailer');
//encrypt passwords using bcrypt
var bcrypt = require('bcryptjs');
const adminModel = require('../models/adminschema');
const employeesModel = require('../models/employeessignupschema');
const customerModel = require('../models/customersignupschema');
const usernamesListModel = require('../models/usernameslistschema');
*/
//get signupadmin on this particular
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
      res.render('signupformcustomer', { title: 'Elite Basket', msg:'', adminDetails: ''});
    } 
  });

  /*
  //Middleware Check username Exactly Correct One
function checkUsername(req, res, next) {
    var username = req.body.username;
    var getCustomerData = customerModel.findOne({Username: username});
    var chechUsernameInUserNamesList = usernamesListModel.findOne({Username: username});
    
    getCustomerData.exec((err, customerData) => {
      if(err) throw err;
      //
       chechUsernameInUserNamesList.exec((err, userNameInUsernamesList) => {
        if(err) throw err;
        
        if(customerData || userNameInUsernamesList) {
  
          return res.render('signupformcustomer', {title: 'Elite Basket', msg: 'Username Already Exists', adminDetails: ''});
        
        } 
  
       //});
      //
          
      if(!customerData) {
  
        var getEmployeeData = employeesModel.findOne({Username: username});
        getEmployeeData.exec((err, employeeData) => {
          if(err) throw err;
          if(employeeData) {
  
          return res.render('signupformcustomer', {title: 'Elite Basket', msg: 'Username Already Exists', adminDetails: ''});
   
        }
        if(!employeeData) {
  
          var getAdminData = adminModel.findOne({Username: username});
          getAdminData.exec((err, adminData) => {
            if(err) throw err;
            if(adminData) {
  
              return res.render('signupformcustomer', {title: 'Elite Basket', msg: 'Username Already Exists', adminDetails: ''});
   
            }
            next();
          });
        }
        });
  
      }
      //
    });
      //
    });
   }
  //Middleware Check Mobile Number Exactally Correct One
  function checkMobileNumber(req, res, next) {
    var mobilenumber = req.body.mobilenumber;
    var getCustomerData = customerModel.findOne({Mobilenumber: mobilenumber});
    getCustomerData.exec((err, customerData) => {
      if(err) throw err;
      if(customerData) {
  
        return res.render('Elite Basket', {title: 'Elite Basket', msg: 'This Mobile Number is Already Registered with us', adminDetails: ''});
      
      }     
      if(!customerData) {
  
        var getEmployeeData = employeesModel.findOne({Mobilenumber: mobilenumber});
        getEmployeeData.exec((err, employeeData) => {
          if(err) throw err;
          if(employeeData) {
  
          return res.render('signupformcustomer', {title: 'Elite Basket', msg: 'This Mobile Number is Already Registered with us', adminDetails: ''});
   
        }
        if(!employeeData) {
  
          var getAdminData = adminModel.findOne({Mobilenumber: mobilenumber});
          getAdminData.exec((err, adminData) => {
            if(err) throw err;
            if(adminData) {
  
              return res.render('signupformcustomer', {title: 'Elite Basket', msg: 'This Mobile Number is Already Registered with us', adminDetails: ''});
   
            }
            next();
          });
        }
        });
  
      }
      
    });
   }
  
   //Middleware Check Email Exactally Correct One
   function checkEmail(req, res, next) {
    var email = req.body.email;
    var getCustomerData = customerModel.findOne({Email: email});
    getCustomerData.exec((err, customerData) => {
      if(err) throw err;
      if(customerData) {
  
        return res.render('signupformcustomer', {title: 'Elite Basket', msg: 'This Email is Already Registered with us', adminDetails: ''});
      
      }     
      if(!customerData) {
  
        var getEmployeeData = employeesModel.findOne({Email: email});
        getEmployeeData.exec((err, employeeData) => {
          if(err) throw err;
          if(employeeData) {
  
          return res.render('signupformcustomer', {title: 'Elite Basket', msg: 'This Email is Already Registered with us', adminDetails: ''});
   
        }
        if(!employeeData) {
  
          var getAdminData = adminModel.findOne({Email: email});
          getAdminData.exec((err, adminData) => {
            if(err) throw err;
            if(adminData) {
  
              return res.render('signupformcustomer', {title: 'Elite Basket', msg: 'This Email is Already Registered with us', adminDetails: ''});
              
            }
            next();
          });
        }
        });
  
      }
      
    });
   }
   //middleware
var aws = require("aws-sdk");
const ses = new aws.SES({"accessKeyId": process.env.SES_I_AM_USER_ACCESS_KEY, "secretAccessKey": process.env.SES_I_AM_USER_SECRET_ACCESS_KEY, "region": process.env.AWS_SES_REGION});
//Send Sign Up Sending OTP Exactly Correct One
router.post('/', checkUsername, checkMobileNumber, checkEmail,   function(req, res, next) {
  
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var username = req.body.username;
  var mobilenumber = req.body.mobilenumber;
  var email = req.body.email;  

  
  var Onetimepassword = require('otp-generator').generate(8, { /*upperCase: false,*/ /* specialChars: false });//crypto.randomBytes(16).toString('hex');

  var customerDetails = new customerModel({
    Firstname: firstname,
    Lastname: lastname,
    Username: username,
    Mobilenumber: mobilenumber,
    Email: email,    
   // Password: password,
    Onetimepassword: Onetimepassword,
    ProfileImage: '/images/avatar2.png'
    });

    customerDetails.save((err )=> {
      if(err) throw err;
      // save username to usernames list
      var userNameListDetail = new usernamesListModel({
        Username: req.body.username
      });
      userNameListDetail.save((err)=> {
        if(err) throw err;
      
      //
//Send OTP Email
      var output = `
    <h3>Hi, Your One Time Password for Account Activation is ${Onetimepassword}</h3>
    <p>Please Enter the One Time Password in the opened link and press Activate Account</p>   
`;

// exactly correct one for production
let params = {
  // send to list
  Destination: {
      ToAddresses: [
          email
      ]
  },
  Message: {
      Body: {
          Html: {
              Charset: "UTF-8",
              Data: output//"<p>this is test body.</p>"
          },
          Text: {
              Charset: "UTF-8",
              Data: 'Hey, this is test.'
          }
      },
      
      Subject: {
          Charset: 'UTF-8',
          Data: "One Time Password (OTP) Email"
      }
  },
  Source: 'vipinkmboj21@gmail.com',//'vipinkmboj21@gmail.com', // must relate to verified SES account
  ReplyToAddresses: [
      email,
  ],
};

// this sends the email
ses.sendEmail(params, (err) => {
  if(err) {
    res.render('signupformcustomer', { title: 'Quick Website', msg:'Error Occured, Email Sending failed', adminDetails: ''}); 
  } else {
    res.render('signupcustomer', { title: 'Quick Website', msg:'Please check the One Time Password (OTP) sent to your Email and enter it here', adminDetails: ''}); 
  }
});
//
//
});
//
/* uncomment later if needed
var ses = require('node-ses');
var client = ses.createClient({key: process.env.SES_I_AM_USER_ACCESS_KEY, secret: process.env.SES_I_AM_USER_SECRET_ACCESS_KEY, amazon: process.env.AMAZON });
  
  client.sendEmail({
    to: email, 
    from: 'vipinkmboj21@gmail.com',//'emailfrom.vipin.website', 
   // cc: 'theWickedWitch@nerds.net',
    //bcc: ['canAlsoBe@nArray.com', 'forrealz@.org'],
    subject: 'One Time Password (OTP) Email',
    //html: output,
    message: output,//'your <p>message</p> goes here',
    altText: 'plain text'
 }, function (err) {
  if(err) {
    res.render('signupcustomer', { title: 'frontendwebdeveloper', msg:'Error Occured, Email Sending failed', adminDetails: ''}); 
  } else {
    res.render('signupcustomer', { title: 'frontendwebdeveloper', msg:'Please check the One Time Password (OTP) sent to your Email and enter it here', adminDetails: ''}); 
  }

 });
//
/* uncomment it later if needed
var transporter = nodemailer.createTransport({ 
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {    
    user: process.env.NODEMAILEMAILUSER,
    pass: process.env.NODEMAILEMAILPASSWORD    
  },
  tls: {    
    rejectUnauthorized: false

  }
});


var mailOption = {
  from: 'resetpa7@gmail.com',
  to: email, //or use req.body.email
  subject: 'One Time Password (OTP) for Account Authentication',
  text: 'Hi,',
  html: output
};

transporter.sendMail(mailOption, function(err, info) {
  if(err) {
    res.render('signupcustomer', { title: 'frontendwebdeveloper', msg:'Error Occured, Email Sending failed', adminDetails: ''}); 
  } else {
    res.render('signupcustomer', { title: 'frontendwebdeveloper', msg:'Please check the One Time Password (OTP) sent to your Email and enter it here', adminDetails: ''}); 
  }
}); 

  uncomment it later if needed*/
  /*

    });     
  });

  //Customer Sign up sending OTP starts here Exactally Correct
*/
  module.exports = router;
