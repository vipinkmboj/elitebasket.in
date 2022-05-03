var express = require('express');
var router = express.Router();

var adminModel = require('../models/adminschema');
var customerModel = require('../models/customersignupschema');
var employeesModel = require('../models/employeessignupschema');
var usernamesListModel = require('../models/usernameslistschema');
//var referralCodeModel = require('../models/referralcodesschema');

// Conver Currency 
//var convertCurrency = require('nodejs-currency-converter');
// require dot env
require('dotenv').config();
//Crypto for creating randombytes key
var crypto = require('crypto');

//encrypt passwords using bcrypt
var bcrypt = require('bcryptjs');

//var session = require('express-session')

//const AWS_SES = new AWS.SES(SES_CONFIG);
/*
aws.config.update({
  region: 'ap-south-1',
  AWSAccessKeyId: process.env.AWSAccessKeyId,
  AWSSecretKey: process.env.AWSSecretKey
});
*/
//var ses = new AWS.ses();
/*
var AWS = require("aws-sdk");

AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
  }
});
*/

/*
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Music-Website', msg: '' });
});
*/
// uncomment it later

router.get('/',  function(req, res, next) {
  /*
  var loginUserCustomer = req.session.customerLoginUserName;//localStorage.getItem('customerLoginUserName');
  var loginUserEmployee = req.session.employeeLoginUserName;//localStorage.getItem('employeeLoginUserName');
  var loginUserAdmin = req.session.adminLoginUserName;//localStorage.getItem('adminLoginUserName');
*/
/* uncomment from here...*/
  if(req.session.customerLoginUserName){
    res.redirect('/dashboardcustomer');
  } else if(req.session.employeeLoginUserName) {
    res.redirect('/dashboardemployees');
  } else if(req.session.adminLoginUserName) {
    res.redirect('/dashboardadmin');
  } else {
    res.render('index', { title: 'Quick Website', msg:''});
  }  
  /*
  res.render('index', { title: 'SaReGaMa Music Academy & GMP Studio', msg:''});
*/
});

router.get('/signupcustomer',  function(req, res, next) {
  /*
  var loginUserCustomer = req.session.customerLoginUserName;//localStorage.getItem('customerLoginUserName');
  var loginUserEmployee = req.session.employeeLoginUserName;//localStorage.getItem('employeeLoginUserName');
  var loginUserAdmin = req.session.adminLoginUserName;//localStorage.getItem('adminLoginUserName');
*/
/* uncomment from here...*/
  if(req.session.customerLoginUserName){
    res.redirect('/dashboardcustomer');
  } else if(req.session.employeeLoginUserName) {
    res.redirect('/dashboardemployees');
  } else if(req.session.adminLoginUserName) {
    res.redirect('/dashboardadmin');
  } else {
    res.render('signupcustomer', { title: 'Elite Basket', msg:'', adminDetails: ''});
  }  
  /*
  res.render('index', { title: 'SaReGaMa Music Academy & GMP Studio', msg:''});
*/
});

//get accountactivated on this particular
router.get('/accountactivatedcustomer',  function(req, res, next) {  
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
    res.render('index', { title: 'Elite Basket', msg:'', adminDetails: ''});
  } 
});

//get index page on this particular
router.get('/getusername/getusernamebyemail',  function(req, res, next) {  
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
    res.render('index', { title: 'Quick Website', msg:'', adminDetails: ''});
  } 
});

//get index page on this particular
router.get('/resetpassword/updatepassword',  function(req, res, next) {  
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
    res.render('index', { title: 'Quick Website', msg:'', adminDetails: ''});
  } 
});

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

        return res.render('index', {title: 'Elite Basket', msg: 'Username Already Exists'});
      
      } 

     //});
    //
        
    if(!customerData) {

      var getEmployeeData = employeesModel.findOne({Username: username});
      getEmployeeData.exec((err, employeeData) => {
        if(err) throw err;
        if(employeeData) {

        return res.render('index', {title: 'Elite Basket', msg: 'Username Already Exists'});
 
      }
      if(!employeeData) {

        var getAdminData = adminModel.findOne({Username: username});
        getAdminData.exec((err, adminData) => {
          if(err) throw err;
          if(adminData) {

            return res.render('index', {title: 'Elite Basket', msg: 'Username Already Exists'});
 
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

      return res.render('index', {title: 'Elite Basket', msg: 'This Mobile Number is Already Registered with us'});
    
    }     
    if(!customerData) {

      var getEmployeeData = employeesModel.findOne({Mobilenumber: mobilenumber});
      getEmployeeData.exec((err, employeeData) => {
        if(err) throw err;
        if(employeeData) {

        return res.render('index', {title: 'Elite Basket', msg: 'This Mobile Number is Already Registered with us'});
 
      }
      if(!employeeData) {

        var getAdminData = adminModel.findOne({Mobilenumber: mobilenumber});
        getAdminData.exec((err, adminData) => {
          if(err) throw err;
          if(adminData) {

            return res.render('index', {title: 'Elite Basket', msg: 'This Mobile Number is Already Registered with us'});
 
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

      return res.render('index', {title: 'Elite Basket', msg: 'This Email is Already Registered with us'});
    
    }     
    if(!customerData) {

      var getEmployeeData = employeesModel.findOne({Email: email});
      getEmployeeData.exec((err, employeeData) => {
        if(err) throw err;
        if(employeeData) {

        return res.render('index', {title: 'Elite Basket', msg: 'This Email is Already Registered with us'});
 
      }
      if(!employeeData) {

        var getAdminData = adminModel.findOne({Email: email});
        getAdminData.exec((err, adminData) => {
          if(err) throw err;
          if(adminData) {

            return res.render('index', {title: 'Elite Basket', msg: 'This Email is Already Registered with us'});
            
          }
          next();
        });
      }
      });

    }
    
  });
 }
//require AWS-sdk
//var AWS = require('aws-sdk');
//const { SES } = require('aws-sdk');

/*
AWS.config.update(
  {
    accessKeyId: process.env.SES_I_AM_USER_ACCESS_KEY,//'<SES IAM user access key>',
    secretAccessKey: process.env.SES_I_AM_USER_SECRET_ACCESS_KEY, //'<SES IAM user secret access key>',
    region: process.env.AWS_SES_REGION //'us-west-2',
  }
);

const ses = new AWS.SESV2();
*/

var aws = require("aws-sdk");
const ses = new aws.SES({"accessKeyId": process.env.SES_I_AM_USER_ACCESS_KEY, "secretAccessKey": process.env.SES_I_AM_USER_SECRET_ACCESS_KEY, "region": process.env.AWS_SES_REGION});
//Send Sign Up Sending OTP Exactly Correct One
router.post('/signupformcustomer', checkUsername, checkMobileNumber, checkEmail, function(req, res, next) {
  
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var username = req.body.username;
  var mobilenumber = req.body.mobilenumber;
  var email = req.body.email;  

  
  var Onetimepassword = require('otp-generator').generate(8, { /*upperCase: false,*/ specialChars: false });//crypto.randomBytes(16).toString('hex');

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
    res.render('signupformcustomer', { title: 'Elite Basket', msg:'Error Occured, Email Sending failed', adminDetails: ''}); 
  } else {
    res.render('signupcustomer', { title: 'Elite Basket', msg:'Please check the One Time Password (OTP) sent to your Email and enter it here', adminDetails: ''}); 
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

    });     
  });

  //Customer Sign up sending OTP starts here Exactally Correct

  //Get Sign Up Page
  /* uncomment it later
  router.get('/signupcustomer',  function(req, res, next) {
    var loginUserCustomer = localStorage.getItem('customerLoginUserName');
    var loginUserEmployee = localStorage.getItem('employeeLoginUserName');
    var loginUserAdmin = localStorage.getItem('adminLoginUserName');
    
    if(loginUserCustomer){
      res.redirect('/dashboardcustomer');
    } else if(loginUserEmployee) {
      res.redirect('/dashboardemployees');
    } else if(loginUserAdmin) {
      res.redirect('/dashboardadmin');
    } else {
      res.render('signupcustomer', { title: 'Front End Web Developer', msg:''});
    }  
  });
  */

   // Sign up Account Activation with OTP strts here
router.post('/accountactivatedcustomer', function(req, res, next) {
  var oneTimePassword = req.body.otp;
  var password = req.body.password;
  var confirmPassword = req.body.cnfpassword;
  if(password != confirmPassword || password == '' || confirmPassword == '') {
    res.render('signupcustomer', { title: 'Quick Website', msg:'Password Not Matched, Please Try again', adminDetails: ''});
  } else {
    password = bcrypt.hashSync(req.body.password, 10);
    var getcustomerDetails = customerModel.findOne({Onetimepassword: oneTimePassword}, {});
    getcustomerDetails.exec((err, ExistingCustomerDetails)=> {
      if(err) throw err;
      if(ExistingCustomerDetails == null || ExistingCustomerDetails == '') {
        res.render('signupcustomer', { title: 'Quick Website', msg:'Wrong OTP Entered, Please Try again', adminDetails:''});

      } else {
        var getCustomerId = ExistingCustomerDetails._id;
        
        customerModel.findByIdAndUpdate(getCustomerId, {Onetimepassword: null, Password: password}, {upsert: true}, function(err, updatedCustomerDetails){
          if(err) throw err;           
          //

                                          //
      //Send Successfully Sign Up Email notification
      var output = `
      <h3>Hi, You have successfully Registered to your account</h3>
      <p>
        Welcome ${updatedCustomerDetails.Firstname} <br/>
        You have successfully registered for Quick Website with <br/>

        Username: ${updatedCustomerDetails.Username}, <br/>

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
          updatedCustomerDetails.Email,
          //'vipinkmboj211@gmail.com',
          'admin@quickwebsite.net'
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
            Data: `${updatedCustomerDetails.Username} just registered to www.quickwebsite.net`
        }
    },
    Source: 'contact@quickwebsite.net',//'vipinkmboj21@gmail.com', // must relate to verified SES account
    ReplyToAddresses: [
      updatedCustomerDetails.Email,
      //'vipinkmboj211@gmail.com',
      'admin@quickwebsite.net'
    ],
  };
  
  // this sends the email
  ses.sendEmail(params, (err) => {
    if(err) {
      res.render('index', { title: 'Quick Website', msg:'Account Activated Successfully, You may log in now', adminDetails: ''});
    } else {
      res.render('index', { title: 'Quick Website', msg:'Account Activated Successfully, You may log in now', adminDetails: ''});
    }
  });
  //

          //
          //res.render('index', { title: 'Quick Website', msg:'Account Activated Successfully, You may log in now', adminDetails: ''});
        })
      }      
    });        
  }  
});
// Sign up Account Activation with OTP ends here

//jwt for creating a token
//var jwt = require('jsonwebtoken');
// require local storage 
/* uncomment it later if needed
if (typeof localStorage === "undefined" || localStorage === null) {
  const LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
*/

//Sign in
/* uncomment it later
router.post('/signin', function(req, res, next) {

  var username = req.body.uname;
  var password = req.body.password;
  var checkUserNameInCustomerData = customerModel.findOne({Username: username});
  var checkUserNameInEmployeesData = employeesModel.findOne({Username: username});
  var checkUserNameInAdminData = adminModule.findOne({Username: username});

  checkUserNameInCustomerData.exec((err, customerData) => {
    if(err) throw err;

    if(customerData != null) {
      
      //Get Password from database
      var getPasswordFromCustomersData = customerData.Password; 
      //Get User Id from database to use in jwt
      var getUserIDFromCustomersData = customerData._id;
      if(bcrypt.compareSync(password, getPasswordFromCustomersData)) {
        if(customerData.Onetimepassword != null) {
          res.render('forgotpassword', { title: 'frontendwebdeveloper', msg:'Please reset your password for seurity purposes, otherwise you will not be able to sign in' });
        } else { 
          var customerToken = jwt.sign({userID: getUserIDFromCustomersData}, process.env.CUSTOMER_LOGIN_TOKEN_ACCESS_KEY /*, {expiresIn: 600 /*86400 = 24 hours}*/
            /* uncomment it later

            );
        /* uncomment it later  
          
          localStorage.setItem('customerLoginTokenName', customerToken);
          localStorage.setItem('customerLoginUserName', username);
          res.redirect('/dashboardcustomer');
        }
      } else {
        res.render('index', { title: 'frontendwebdeveloper', msg:'Invalid Password' });
      }  
      
    } else if(customerData == null) {

      checkUserNameInEmployeesData.exec((err, employeeData ) => {
        if(err) throw err;
        if(employeeData != null) {

          //Get Password from database
        var getPasswordFromEmployeeData = employeeData.Password; 
        //Get User Id from database to use in jwt
        var getUserIDFromEmployeeData = employeeData._id;
        
        if(bcrypt.compareSync(password, getPasswordFromEmployeeData)) {
          if(employeeData.Onetimepassword != null) {
            res.render('forgotpassword', { title: 'frontendwebdeveloper', msg:'Please reset your password for seurity purposes, otherwise you will not be able to sign in' });
          } else { 
            var employeeToken = jwt.sign({userID: getUserIDFromEmployeeData}, process.env.CUSTOMER_LOGIN_TOKEN_ACCESS_KEY /*, {expiresIn: 600 /*86400 = 24 hours}*/
              /* uncomment it later
              );
           
            /* uncomment it later
           
            localStorage.setItem('employeeLoginTokenName', employeeToken);
            localStorage.setItem('employeeLoginUserName', username);
            res.redirect('/dashboardemployees');
          }
        } else {
          res.render('index', { title: 'frontendwebdeveloper', msg:'Invalid Password' });
        }  
     

        } /*if(employeeData != null) { enda*/
          /* uncomment it later
          else if(employeeData == null) {
          checkUserNameInAdminData.exec((err, adminData) => {
            if(err) throw err;

            if(adminData != null) {
              //Get Password from database
        var getPasswordFromAdminData = adminData.Password; 
        //Get User Id from database to use in jwt
        var getUserIDFromAdminData = adminData._id;

        if(bcrypt.compareSync(password, getPasswordFromAdminData)) {
          if(adminData.Onetimepassword != null) {
            res.render('forgotpassword', { title: 'frontendwebdeveloper', msg:'Please reset your password for seurity purposes, otherwise you will not be able to sign in' });
          } else { 
            var adminToken = jwt.sign({userID: getUserIDFromAdminData}, process.env.CUSTOMER_LOGIN_TOKEN_ACCESS_KEY /*, {expiresIn: 600 /*86400 = 24 hours}*/
              /* uncomment it later
              );
            
            /* uncomment it later

            localStorage.setItem('adminLoginTokenName', adminToken);
            localStorage.setItem('adminLoginUserName', username);
            res.redirect('/dashboardadmin');
          }
        } else {
          res.render('index', { title: 'frontendwebdeveloper', msg:'Invalid Password' });
        }  

            }/* if(adminData != null) { */
              /* uncomment it later
              else{
              res.render('index', { title: 'frontendwebdeveloper', msg:'Invalid Username' });
            }


          });
        }

      });
    } //else if(customerData == null) {ends

  });
});
 
uncomment it later */
      




//Sign in
/*
function authenticateCustomerToken(req, res, next ) {
 const authHeader = req.headers['authorization']
  //Bearer TOKEN 
  const token = authHeader && authHeader.split('')[1]
  if(token == null) {
    return res.render('index', { title: 'frontendwebdeveloper', msg:'No Access to Sign in Token, try again' });

  } else {
    jwt.verify(token, process.env.CUSTOMER_LOGIN_TOKEN_ACCESS_KEY, (err, {userID: getUserIDFromCustomersData}) => {
      if(err) throw
    })
  }
  
}
*/
//sign in starts
router.post('/signin', function(req, res, next) {

  var username = req.body.username;
  var password = req.body.password;
  var checkUserNameInCustomerData = customerModel.findOne({Username: username});
  var checkUserNameInEmployeesData = employeesModel.findOne({Username: username});
  var checkUserNameInAdminData = adminModel.findOne({Username: username});

  checkUserNameInCustomerData.exec((err, customerData) => {
    if(err) throw err;

    if(customerData != null) {      
      //Get Password from database
      var getPasswordFromCustomersData = customerData.Password; 
      //Get User Id from database to use in jwt
      //var getUserIDFromCustomersData = customerData._id;
      if(bcrypt.compareSync(password, getPasswordFromCustomersData)) {
        if(customerData.Onetimepassword != null) {
          res.render('forgotpassword', { title: 'Quick Website', msg:'Please reset your password for seurity purposes, otherwise you will not be able to sign in' });
        } else { 
          /*var customerToken = jwt.sign({userID: getUserIDFromCustomersData}, process.env.CUSTOMER_LOGIN_TOKEN_ACCESS_KEY /*, {expiresIn: 600 /*86400 = 24 hours}*/            
          //  );         
          // localStorage.setItem('customerLoginTokenName', customerToken);
          // localStorage.setItem('customerLoginUserName', username);
          //using session
         // req.session.customerLoginUserName = username;
          //res.render('dashboardcustomer', {title: 'frontendwebdeveloper', msg: '',customerToken: customerToken} )
             
          //
//Send Successfully Sign in Email notification
      var output = `
      <h3>Hi, You have successfully signed in to your account</h3>
      <p>
        Username: ${username}, <br/>
        If you didn't sign in, then please reset your password immediately for security reasons.<br/>
        If you have signed in by yourself, then you are safe.
              
      </p>   
  `;
  
  // exactly correct one for production
  let params = {
    // send to list
    Destination: {
        ToAddresses: [
          customerData.Email,
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
            Data: `${username} just signed in to www.quickwebsite.net`
        }
    },
    Source: 'vipinkmboj21@gmail.com',//'vipinkmboj21@gmail.com', // must relate to verified SES account
    ReplyToAddresses: [
      customerData.Email,
      //'vipinkmboj211@gmail.com',
      'vipinkmboj21@gmail.com'
    ],
  };
  
  // this sends the email
  ses.sendEmail(params, (err) => {
    if(err) {
      req.session.customerLoginUserName = username;
      res.redirect('/dashboardcustomer');
    } else {
      req.session.customerLoginUserName = username;
      res.redirect('/dashboardcustomer');
    }
  });
  //
        //  res.redirect('/dashboardcustomer');
        }
      } else {
        res.render('index', { title: 'Quick Website', msg:'Invalid Password' });
      }        
    } else if(customerData == null) {
      checkUserNameInEmployeesData.exec((err, employeeData ) => {
        if(err) throw err;
        if(employeeData != null) {
          //Get Password from database
        var getPasswordFromEmployeeData = employeeData.Password; 
        //Get User Id from database to use in jwt
        //var getUserIDFromEmployeeData = employeeData._id;        
        if(bcrypt.compareSync(password, getPasswordFromEmployeeData)) {
          if(employeeData.Onetimepassword != null) {
            res.render('forgotpassword', { title: 'Quick Website', msg:'Please reset your password for seurity purposes, otherwise you will not be able to sign in' });
          } else { 
            //var employeeToken = jwt.sign({userID: getUserIDFromEmployeeData}, process.env.CUSTOMER_LOGIN_TOKEN_ACCESS_KEY /*, {expiresIn: 600 /*86400 = 24 hours}*/
                     // );          
            // localStorage.setItem('employeeLoginTokenName', employeeToken);
            // localStorage.setItem('employeeLoginUserName', username);
           // req.session.employeeLoginUserName = username;
          
                    //
//Send Successfully Sign in Email notification
      var output = `
      <h3>Hi, You have successfully signed in to your account</h3>
      <p>
        Username: ${username}, <br/>
        If you didn't sign in, then please reset your password immediately for security reasons.<br/>
        If you have signed in by yourself, then you are safe.
              
      </p>   
  `;
  
  // exactly correct one for production
  let params = {
    // send to list
    Destination: {
        ToAddresses: [
          employeeData.Email,
         // 'vipinkmboj211@gmail.com',
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
            Data: `${username} just signed in to www.quickwebsite.net`
        }
    },
    Source: 'vipinkmboj21@gmail.com',//'vipinkmboj21@gmail.com', // must relate to verified SES account
    ReplyToAddresses: [
      employeeData.Email,
      //'vipinkmboj211@gmail.com',
      'vipinkmboj21@gmail.com'
    ],
  };
  
  // this sends the email
  ses.sendEmail(params, (err) => {
    if(err) {
      req.session.employeeLoginUserName = username;
      res.redirect('/dashboardemployees');
    } else {
      req.session.employeeLoginUserName = username;
      res.redirect('/dashboardemployees');
    }
  });
  //

          //  res.redirect('/dashboardemployees');
          }
        } else {
          res.render('index', { title: 'Quick Website', msg:'Invalid Password' });
        } 
        } /*if(employeeData != null) { enda*/          
          else if(employeeData == null) {
          checkUserNameInAdminData.exec((err, adminData) => {
            if(err) throw err;
            if(adminData != null) {
              //Get Password from database
        var getPasswordFromAdminData = adminData.Password; 
        //Get User Id from database to use in jwt
       // var getUserIDFromAdminData = adminData._id;
        if(bcrypt.compareSync(password, getPasswordFromAdminData)) {
          if(adminData.Onetimepassword != null) {
            res.render('forgotpassword', { title: 'Quick Website', msg:'Please reset your password for seurity purposes, otherwise you will not be able to sign in' });
          } else { 
           // var adminToken = jwt.sign({userID: getUserIDFromAdminData}, process.env.CUSTOMER_LOGIN_TOKEN_ACCESS_KEY /*, {expiresIn: 600 /*86400 = 24 hours}*/
         
            //  );
            // localStorage.setItem('adminLoginTokenName', adminToken);
            // localStorage.setItem('adminLoginUserName', username);
            //req.session.adminLoginUserName = username;

                             //
//Send Successfully Sign in Email notification
      var output = `
      <h3>Hi, You have successfully signed in to your account</h3>
      <p>
        Username: ${username}, <br/>
        If you didn't sign in, then please reset your password immediately for security reasons.<br/>
        If you have signed in by yourself, then you are safe.
              
      </p>   
  `;
  
  // exactly correct one for production
  let params = {
    // send to list
    Destination: {
        ToAddresses: [
          adminData.Email,
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
            Data: `${username} just signed in to www.quickwebsite.net`
        }
    },
    Source: 'vipinkmboj21@gmail.com',//'vipinkmboj21@gmail.com', // must relate to verified SES account
    ReplyToAddresses: [
      adminData.Email,
     // 'vipinkmboj211@gmail.com',
      'vipinkmboj21@gmail.com'
    ],
  };
  
  // this sends the email
  ses.sendEmail(params, (err) => {
    if(err) {
      req.session.adminLoginUserName = username;
      res.redirect('/dashboardadmin');
    } else {
      req.session.adminLoginUserName = username;
      res.redirect('/dashboardadmin');
    }
  });
  //

            //res.redirect('/dashboardadmin');
          }
        } else {
          res.render('index', { title: 'Elite Basket', msg:'Invalid Password' });
        }  

            }/* if(adminData != null) { */
              
              else{
              res.render('index', { title: 'Elite Basket', msg:'Invalid Username' });
            }


          });
        }

      });
    } //else if(customerData == null) {ends

  });
});
 

//sign in ends




//stripe
/*
var cartItemsModel = require('../model/cartitemsschema'); 
var purchasedModel = require('../model/purchasedschema');
const { error } = require('console');
//
//const stripeSecretKey = process.env.STRIPE_SECRET_KEY_Test
const stripeSecretKey = process.env.STRIPE_SECRET_KEY_Live 

//const stripePublicKey = process.env.STRIPE_PUBLIC_KEY_Test//process.env.STRIPE_PUBLIC_KEY_Live;
//const stripePublicKey = process.env.STRIPE_PUBLIC_KEY_Live;
const stripe = require('stripe')(stripeSecretKey);


/* customised experimental one
const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1;
}; 
router.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "inr"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

// customised experimental one */


// Exactly correct One 
//
/*
router.post('/create-checkout-session', async (req, res) => { 
   
  var getitemPrice = req.body.orderPrice;   
  //var itemPrice = parseFloat(getitemPrice)*100;  
  //var itemPrice = getitemPrice*70*100; 
  //var currentConversionRate =  convertCurrency(1, 'USD', 'INR'); 
  var itemPrice = getitemPrice*70*100;  
  //var itemPrice = getitemPrice*currentConversionRate*100; 
  var itemId = req.body.orderId;
  //console.log(currentConversionRate);
  
  //var date = Date();

  const YOUR_DOMAIN = 'http://localhost:5000';//'https://www.quickwebsite.net';//'http://localhost:5000/';//'https://www.quickwebsite.net' // 'http://localhost:5000/';//'https://www.quickwebsite.net/';//'http://localhost:5000/'///'http://www.quickwebsite.net/';//'http://localhost:5000/'// 'http://www.quickwebsite.net/'; // 'http://localhost:5000'
  
  var loginUser = {
    loginUserCustomer: req.session.customerLoginUserName,//localStorage.getItem('customerLoginUserName'),
    loginUserEmployee: req.session.employeeLoginUserName,//localStorage.getItem('employeeLoginUserName'),
    loginUserAdmin: req.session.adminLoginUserName//localStorage.getItem('adminLoginUserName')

  };
  var currentAccountUser = loginUser.loginUserCustomer || loginUser.loginUserEmployee || loginUser.loginUserAdmin;
  if(currentAccountUser) {
    //
    customerModel.findOne({Username: currentAccountUser}).exec(async (err, currentAccountUserData) => {
      if(err) throw err;
      if(currentAccountUserData) {
        var currentAccountUserEmailId = currentAccountUserData.Email;   
  
  const session = await stripe.checkout.sessions.create({       
    payment_method_types: ['card'],    
    line_items: [
      {
          
          price_data: {
          currency: 'inr',       
          product_data: { 

            name: 'Order Id: ' + itemId ,
            //receipt_email: customerEmailId,
            //description: 'Username: ' + currentAccountUser,
                             
              //images: ['https://i.imgur.com/EHyR2nP.png'],
            },
          
          unit_amount: itemPrice,
        },
        
        quantity: 1,
        
      },   
    ],
    //Exactly correct one below
    customer_email: currentAccountUserEmailId,
    //Exactly correct one below
    client_reference_id: itemId,//.replace(' ', ''), 
    mode: 'payment',
    
    //success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
    success_url: `${req.headers.origin}/success?id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/?canceled=true`,

   
    //success_url: YOUR_DOMAIN + '/success?id={CHECKOUT_SESSION_ID}',//`${YOUR_DOMAIN}/success`,
    //cancel_url: `${YOUR_DOMAIN}/cancel`,
    
  });
  
 res.json({ id: session.id }); 
 
//
  //Send Session Id to database to fetch data from stripe
   //exactly correct one
   /*
   const sessionn = await stripe.checkout.sessions.retrieve(
    session.id
  );
  console.log(sessionn);
  console.log(sessionn.payment_status); */
  /*
   cartItemsModel.findByIdAndUpdate(itemId.replace(' ', ''), {SessionId: session.id}, async function(err, sessionId) {
    if(err) throw err;
    if(sessionId) {     
      
      res.end();
    }
  });
  
 //

  }  // if currentAccountUserDate ends here  
}); // findOne by Username ends here


} // if(currentAccountUser) ends here
}); // create -session ends here
 
//exactly correct one ends here
/*
router.get('/checkout-session'/*'/success'*//*, async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.id);
    res.json(session);  
  
});
*/
  /*
  // send invoice in Email
  //
  //Send OTP Email
  // get currentAccountUser's Email Id to send invoice
  cartItemsModel.findOne({Username: currentAccountUser}).exec((err, currentAccountUserData) => {
    if(err) {
      res.render('dashboardcart', {title: 'Quick Website', msg:'Error Occured, Try Again Please', loginUser: loginUser.currentAccountUser, currentAccountUserData: ''});
    } if(currentAccountUserData) {
      //
    var email = currentAccountUserData.Email;
  //
  //var email = 'current user account email id'
  var output = `
  <h3>Hi, Here is invoice for the order your Order Id Number ${itemId}</h3>
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
        Data: "Invoice Email"
    }
},
Source: 'vipinkmboj21@gmail.com', // must relate to verified SES account
ReplyToAddresses: [
    email,
],
};

// this sends the email
ses.sendEmail(params, (err) => {
if(err) {
  res.render('dashboardcart', { title: 'Quick Website', msg:'Error Occured, Email Sending failed', adminDetails: ''}); 
} else {
  res.render('dashboardcart', { title: 'Quick Website', msg:'Please check the One Time Password (OTP) sent to your Email and enter it here', adminDetails: ''}); 
}
});
}
//
}) 
//
  //
  } //if(currentAccountUser ends here)
  
});
*/


/* Exactly Correct One
router.post('/create-checkout-session', async (req, res) => {
  
  
  var getitemPrice = req.body.orderPrice;   
  //var itemPrice = parseFloat(getitemPrice)*100;  
  var itemPrice = getitemPrice*70*100;  

  console.log(itemPrice);
  console.log(typeof itemPrice);

  var itemId = req.body.orderId;
  var customerEmailId = 'Customer\'s Email Id';
  var date = Date();
  var name = `
  Item Id: ${itemId},  
  Customer's Email Id: ${customerEmailId}, 
  Date: ${date},  
  
  `
  
  
  const YOUR_DOMAIN = 'http://localhost:5000'
  const session = await stripe.checkout.sessions.create({
    
    payment_method_types: ['card'],
    line_items: [
      {
          
          price_data: {
          currency: 'inr',
          product_data: {            
          name: name,                        
            //images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          
          unit_amount: itemPrice,
        },
        
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/cancel`,
  });
  res.json({ id: session.id });
});
*/
//

// upload profile image
//Require multer for file upload
var multer = require('multer');
//require path
var path = require('path');
//const { findOneAndDelete, findOneAndRemove } = require('../models/cartitemsschema');
router.use(express.static(path.join(__dirname, './public')));
//Set Storage Engine for file to be stored
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, `./public/uploads/`)
  },
  
  filename: function(req, file, cb) {     
    
    cb(null, `${Date.now()}_${file.fieldname}${path.extname(file.originalname)}`);
  }  
  /* Correct One so far
  filename: function(req, file, cb) {    
    cb(null, Date.now() + '_' + file.fieldname + '_' + path.extname(file.originalname));
  }
  */
});
//init upload correct one starts here
/*
const filesForGalleryUpload = multer({
  storage: storage,
  limits: {fileSize: 1000000},
  fileFilter: function(req, file, cb) {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
      cb(null, true)
    } else {
      cb(null, false)
    }
  }
}).single('uploadcontentforgallery');
 Correct One Ends*/
//
const upload = multer({
  storage: storage,
  //limits: {fileSize: 1000000000},    
  fileFilter: function(req, file, cb) {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
      cb(null, true)
    } else {
      cb(null, false)
    }
  }
});

var multipleUploads = upload.fields([{name: 'uploadprofileimage', maxCount: 1}]);//.single('uploadcontentforgallery');//fields([{name: "uploadcontentforgallery", maxCount: 1}, {name: "uploadcontentfortemplates", maxCount: 1}]);

router.post('/uploadprofileimage', multipleUploads, function(req, res, next) {

  var loginUser = {
    loginUserCustomer: req.session.customerLoginUserName,//localStorage.getItem('customerLoginUserName'),
    loginUserEmployee: req.session.employeeLoginUserName,//localStorage.getItem('employeeLoginUserName'),
    loginUserAdmin: req.session.adminLoginUserName//localStorage.getItem('adminLoginUserName')

  };
  var currentAccountUser = loginUser.loginUserCustomer || loginUser.loginUserEmployee || loginUser.loginUserAdmin;

  if(currentAccountUser) {
    if(req.files.uploadprofileimage) {
      var profileImage = req.files.uploadprofileimage[0].filename;
    } else {
      profileImage = 'No Profile Image Uploaded'
    }
    if(loginUser.loginUserCustomer) {
      // first move old profile image to recyclebin then do findOneAndUpdate()      
      customerModel.findOneAndUpdate({Username: loginUser.loginUserCustomer}, {ProfileImage: `./uploads/${profileImage}`}, /*{new: true},*/ {upsert: true}, function(err) {
        if(err) {
          res.render('dashboardcustomerprofile', { title: 'Quick Website', msg:'', loginUser: loginUser.loginUserCustomer, currentLoginData: '' });
        } else {
          res.redirect('dashboardcustomerprofile');
          //res.redirect('/');
          //res.render('dashboardcustomerprofile', { title: 'Quick Website', msg:'Profile Image Uploaded', loginUser: loginUser.loginUserCustomer, currentLoginData: '' });
        }
        //
        /*
        if(currentLoginData !== null) {
          res.render('dashboardcustomerprofile', { title: 'Quick Website', msg:'Profile Image Uploaded', loginUser: loginUser.loginUserCustomer, currentLoginData: ''});
        } else {
          res.render('dashboardcustomerprofile', { title: 'Quick Website', msg:'Profile Image Uploaded', loginUser: loginUser.loginUserCustomer, currentLoginData: '' });
        }
        */
      });
    } else if(loginUser.loginUserEmployee) {
      //
      //first of all move old profile image from employee schema to recyclebin and then findOneandUpdate() to update new image. 

      //
    } else if(loginUser.loginUserAdmin){
      //
      //first of all move old profile image from Admin schema to recyclebin and then findOneandUpdate() to update new image. 


      //
    } else {
      res.redirect('/');
    }
  } else {
    res.redirect('/');
  }
});

// Delete customer Account strts here
//var recycleBinModel = require('../models/recyclebinschema');
//const adminModel = require('../models/adminschema');

router.post('/deletecustomeraccount', (req, res, next) => {
  var loginUser = {
    loginUserCustomer: req.session.customerLoginUserName,//localStorage.getItem('customerLoginUserName'),
    loginUserEmployee: req.session.employeeLoginUserName,//localStorage.getItem('employeeLoginUserName'),
    loginUserAdmin: req.session.adminLoginUserName//localStorage.getItem('adminLoginUserName')

  };
  //if(loginUser.loginUserCustomer) {
    //var id = loginUser.loginUserCustomer;
    //console.log(loginUser.loginUserCustomer)
    customerModel.findOneAndRemove({Username: loginUser.loginUserCustomer}, (err, customerAccountToBeMovedToRecyclebin) => {
      if(err) throw err;
      cartItemsModel.find({Username: loginUser.loginUserCustomer}).exec((err, cartItemsToBeMovedToRecycleBin) => {
        if(err) throw err;


        console.log(customerAccountToBeMovedToRecyclebin);
        console.log(cartItemsToBeMovedToRecycleBin);
        cartItemsModel.deleteMany({Username: loginUser.loginUserCustomer}, function(err) {
          if(err) throw err;      
        
        
      
      var customerAccountDetails = new recycleBinModel({
        DeletedCustomerAccountDetails: `
        Customer Account Details: ${customerAccountToBeMovedToRecyclebin} <br/>
        Customer Account Cart Items: ${cartItemsToBeMovedToRecycleBin}        
        `
      });
      customerAccountDetails.save((err) => {
        if(err) throw err; 
        req.session.destroy(function(err) {
          if(err) {
            res.redirect('/');
          } else {
                   // Send Notification Email
        //
        //
      //Send Email
      var output = `
      <h3>Hi, You Have a new add post</h3>
      <p>
      Customer Username: ${loginUser.loginUserCustomer} <br/>
      Account Status: Deactivated
      </p>   
  `;
  
  // exactly correct one for production
  let params = {
    // send to list
    Destination: {
        ToAddresses: [
          'admin@quickwebsite.net'
            //'vipinkmboj211@gmail.com'
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
                Data: 'Text Message goes here'
            }
        },
        
        Subject: {
            Charset: 'UTF-8',
            Data: "Account Deactivation Notification"
        }
    },
    Source: 'contact@quickwebsite.net',//'admin@quickwebsite.net',//vipinkmboj21@gmail.com',// 'contact@quickwebsite.net',//  // must relate to verified SES account
    ReplyToAddresses: [
      'admin@quickwebsite.net'
        //'vipinkmboj211@gmail.com'
    ],
  };

  // this sends the email
  ses.sendEmail(params, (err) => {
    if(err) {
      res.render('index', { title: 'Quick Website', msg:'Account Deactivated! Hope To See You Again' });
    } else {
      res.render('index', { title: 'Quick Website', msg:'Account Deactivated! Hope To See You Again' });
    }
  });
      //
            //res.render('index', { title: 'Quick Website', msg:'Account Deactivated! Hope To See You Again' });
      
          } 
        });
        
      });
    });
    });
    });
  //}
});


//Delete Customer Account ends here

//get signupadmin on this particular
router.get('/admin/signupadmin',  function(req, res, next) {  
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
    res.render('signupadmin', { title: 'Quick Website', msg:'', adminDetails: ''});
  } 
});

//get accountactivated on this particular
router.get('/admin/accountactivatedadmin',  function(req, res, next) {  
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
    res.render('index', { title: 'Quick Website', msg:'', adminDetails: ''});
  } 
});

//get signupemployees on this particular
router.get('/employees/signupemployees',  function(req, res, next) {  
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
    res.render('signupemployees', { title: 'Quick Website', msg:''});
  } 
}); 

//get accountactivated on this particular
router.get('/employees/accountactivatedemployees',  function(req, res, next) {  
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
    res.render('index', { title: 'Quick Website', msg:''});
  } 
});



// Create a referral code

//Middleware Check username while creating referral code Exactly Correct One
function checkUsernameWhileCreatingReferralCode(req, res, next) {
  var username = req.body.usrname;
  var getCustomerData = customerModel.findOne({Username: username});
  var chechUsernameInUserNamesList = usernamesListModel.findOne({Username: username});
  
  getCustomerData.exec((err, customerData) => {
    if(err) throw err;
    //
     chechUsernameInUserNamesList.exec((err, userNameInUsernamesList) => {
      if(err) throw err;
      
      if(customerData || userNameInUsernamesList) {

        return res.render('affiliatemarketerfirsttimers', {title: 'Quick Website', msg: 'Username Already Exists'});
      
      } 

     //});
    //
        
    if(!customerData) {

      var getEmployeeData = employeesModel.findOne({Username: username});
      getEmployeeData.exec((err, employeeData) => {
        if(err) throw err;
        if(employeeData) {

        return res.render('affiliatemarketerfirsttimers', {title: 'Elite Basket', msg: 'Username Already Exists'});
 
      }
      if(!employeeData) {

        var getAdminData = adminModel.findOne({Username: username});
        getAdminData.exec((err, adminData) => {
          if(err) throw err;
          if(adminData) {

            return res.render('affiliatemarketerfirsttimers', {title: 'Quick Website', msg: 'Username Already Exists'});
 
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
function checkMobileNumberWhileCreatingReferralCode(req, res, next) {
  var mobilenumber = req.body.mobilenumber;
  var getCustomerData = customerModel.findOne({Mobilenumber: mobilenumber});
  getCustomerData.exec((err, customerData) => {
    if(err) throw err;
    if(customerData) {

      return res.render('affiliatemarketerfirsttimers', {title: 'Quick Website', msg: 'This Mobile Number is Already Registered with us'});
    
    }     
    if(!customerData) {

      var getEmployeeData = employeesModel.findOne({Mobilenumber: mobilenumber});
      getEmployeeData.exec((err, employeeData) => {
        if(err) throw err;
        if(employeeData) {

        return res.render('affiliatemarketerfirsttimers', {title: 'Quick Website', msg: 'This Mobile Number is Already Registered with us'});
 
      }
      if(!employeeData) {

        var getAdminData = adminModel.findOne({Mobilenumber: mobilenumber});
        getAdminData.exec((err, adminData) => {
          if(err) throw err;
          if(adminData) {

            return res.render('affiliatemarketerfirsttimers', {title: 'Quick Website', msg: 'This Mobile Number is Already Registered with us'});
 
          }
          next();
        });
      }
      });

    }
    
  });
 }

 //Middleware Check Email Exactally Correct One
 function checkEmailWhileCreatingReferralCode(req, res, next) {
  var email = req.body.email;
  var getCustomerData = customerModel.findOne({Email: email});
  getCustomerData.exec((err, customerData) => {
    if(err) throw err;
    if(customerData) {

      return res.render('affiliatemarketerfirsttimers', {title: 'Quick Website', msg: 'This Email is Already Registered with us'});
    
    }     
    if(!customerData) {

      var getEmployeeData = employeesModel.findOne({Email: email});
      getEmployeeData.exec((err, employeeData) => {
        if(err) throw err;
        if(employeeData) {

        return res.render('affiliatemarketerfirsttimers', {title: 'Quick Website', msg: 'This Email is Already Registered with us'});
 
      }
      if(!employeeData) {

        var getAdminData = adminModel.findOne({Email: email});
        getAdminData.exec((err, adminData) => {
          if(err) throw err;
          if(adminData) {

            return res.render('affiliatemarketerfirsttimers', {title: 'Quick Website', msg: 'This Email is Already Registered with us'});
            
          }
          next();
        });
      }
      });

    }
    
  });
 }
//Create referral Code and Sign up Send Sign Up Sending OTP Exactly Correct One

router.post('/createreferralcodefirsttimers', checkUsernameWhileCreatingReferralCode, checkMobileNumberWhileCreatingReferralCode, checkEmailWhileCreatingReferralCode,   function(req, res, next) {
  
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var username = req.body.usrname;
  var mobilenumber = req.body.mobilenumber;
  var email = req.body.email;  
  var referralCode = crypto.randomBytes(16).toString('hex');
  
  var Onetimepassword = require('otp-generator').generate(8, { /*upperCase: false,*/ specialChars: false });//crypto.randomBytes(16).toString('hex');

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
        Username: req.body.usrname
      });
      userNameListDetail.save((err)=> {
        if(err) throw err;
      // Create referral Code

      //
        var referralCodeDetails = new referralCodeModel({
          Username: req.body.usrname,
          ReferralCode: referralCode
        });

        referralCodeDetails.save((err) => {
          if(err) throw err;
        
      //


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
    res.render('signupcustomer', { title: 'Quick Website', msg:'Error Occured, Email Sending failed', adminDetails: ''}); 
  } else {
    res.render('signupcustomer', { title: 'Quick Website', msg:'Referral Code Created Successfully, Please check the One Time Password (OTP) sent to your Email and enter it here', adminDetails: ''}); 
  }
});
//
});

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

    });     
  });

  //Create Referral Code and Customer Sign up sending OTP starts here Exactally Correct

  //get affiliatemarketerfirsttimers if createreferralcodefirsttimers is clicked
router.get('/createreferralcodefirsttimers',  function(req, res, next) {  
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
    res.render('affiliatemarketerfirsttimers', { title: 'Elite Basket', msg:'', adminDetails: ''});
  } 
});


module.exports = router;


