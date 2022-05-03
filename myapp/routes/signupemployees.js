var express = require('express');
var router = express.Router();

// require dot env
require('dotenv').config();
//Crypto for creating randombytes key
var crypto = require('crypto');
//nodemailer for sending emails from website to clients
// var nodemailer = require('nodemailer');
//encrypt passwords using bcrypt
var bcrypt = require('bcryptjs');
const adminModel = require('../models/adminschema');
const employeesModel = require('../models/employeessignupschema');
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
      res.render('signupemployees', { title: 'Quick Website', msg:'', adminDetails: ''});
    } 
  });

  var aws = require("aws-sdk");
  const ses = new aws.SES({"accessKeyId": process.env.SES_I_AM_USER_ACCESS_KEY, "secretAccessKey": process.env.SES_I_AM_USER_SECRET_ACCESS_KEY, "region": process.env.AWS_SES_REGION});

  // Sign up Account Activation with OTP strts here
router.post('/', function(req, res, next) {
    var oneTimePassword = req.body.otp;
    var password = req.body.password;
    var confirmPassword = req.body.cnfpassword;
    if(password != confirmPassword || password == '' || confirmPassword == '') {
      res.render('signupemployees', { title: 'Elite Basket', msg:'Password Not Matched, Please Try again', adminDetails: ''});
    } else {
      password = bcrypt.hashSync(req.body.password, 10);
      var getAdminDetails = employeesModel.findOne({Onetimepassword: oneTimePassword}, {});
      getAdminDetails.exec((err, ExistingAdminDetails)=> {
        if(err) throw err;
        if(ExistingAdminDetails == null || ExistingAdminDetails == '') {
          res.render('signupemployees', { title: 'Elite Basket', msg:'Wrong OTP Entered, Please Try again', adminDetails:''});
  
        } else {
          var getAdminId = ExistingAdminDetails._id;
          
          employeesModel.findByIdAndUpdate(getAdminId, {Onetimepassword: null, Password: password}, {upsert: true}, function(err, updatedAdminDetails){
            if(err) throw err; 
            //
            
                                       //
        //Send Successfully Sign Up Email notification
        var output = `
        <h3>Hi, You have successfully Registered to your account</h3>
        <p>
          Welcome ${updatedAdminDetails.Firstname} <br/>
          You have successfully registered for Quick Website with <br/>
  
          Username: ${updatedAdminDetails.Username}, <br/>
  
          <br/><br/>
          Regards,<br/>
          Team (Quick Website)
          
                
        </p>   
    `;
    
    // exactly correct one for production
    let params = {
      // send to list
      Destination: {
          ToAddresses: [
            updatedAdminDetails.Email,
            //'vipinkmboj211@gmail.com',
            'vipinkmboj21@gmail.com'
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
              Data: `${updatedAdminDetails.Username} just registered to www.quickwebsite.net`
          }
      },
      Source: 'vipinkmboj21@gmail.com',//'vipinkmboj21@gmail.com', // must relate to verified SES account
      ReplyToAddresses: [
        updatedAdminDetails.Email,
        //'vipinkmboj211@gmail.com',
        'vipinkmboj@gmail.com'
      ],
    };
    
    // this sends the email
    ses.sendEmail(params, (err) => {
      if(err) {
        res.render('signin', { title: 'Elite Basket', msg:'Account Activated Successfully, You may log in now', adminDetails: ''});
      } else {
        res.render('signin', { title: 'Elite Basket', msg:'Account Activated Successfully, You may log in now', adminDetails: ''});
      }
    });
    //
            
            //
            //res.render('admin', { title: 'Quick Website', msg:'Account Activated Successfully, You may log in now', adminDetails: ''});
          })
        }      
      });        
    }  
  });
  // Sign up Account Activation with OTP ends here
  

  module.exports = router;

