var express = require('express');
var router = express.Router();


var adminModel = require('../models/adminschema');
var customerModel = require('../models/customersignupschema');
var employeesModel = require('../models/employeessignupschema');
var adminMembersTeamModel = require('../models/adminmembersteamschema');
var usernamesListModel = require('../models/usernameslistschema');
// require dot env
require('dotenv').config();
//Crypto for creating randombytes key
var crypto = require('crypto');
//nodemailer for sending emails from website to clients
// var nodemailer = require('nodemailer');
//encrypt passwords using bcrypt
var bcrypt = require('bcryptjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signupformadmin', { title: 'Elite Basket', msg: '' });
});


//Require multer for file upload
var multer = require('multer');
//require path
var path = require('path');
router.use(express.static(path.join(__dirname, './public')));
//Set Storage Engine for file to be stored
const storage = multer.diskStorage({
  destination: './public/uploads/', 
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
  }
});
//init upload
const upload = multer({
  storage: storage,
  //limits: {fileSize: 1000000},
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('nationalidimage');
// Check file type
function checkFileType(file, cb) {
  // Allowed File extentions
  const fileTypes = /jpeg|jpg|png|gif/;
  //Check the Extentions
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);
  if(mimetype && extName) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}




var aws = require("aws-sdk");
const ses = new aws.SES({"accessKeyId": process.env.SES_I_AM_USER_ACCESS_KEY, "secretAccessKey": process.env.SES_I_AM_USER_SECRET_ACCESS_KEY, "region": process.env.AWS_SES_REGION});

//Exactly Correct one
router.post('/', upload, function(req, res, next) {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var username = req.body.usrname;
  var mobilenumber = req.body.mobilenumber;
  var email = req.body.email; 
  var nationalid = req.body.nationalid;
  var nationalidimage = req.file.filename;      

  var Onetimepassword = require('otp-generator').generate(6, { upperCaseAlphabets: false, specialChars: false });//crypto.randomBytes(16).toString('hex');

//below is correct one
//Check Username in UsernameList
//
  usernamesListModel.findOne({Username: username}, {Username: username}).exec((err, dataUsernameInUsernameList) => {
    if(err) throw err;
    if(dataUsernameInUsernameList != null) {
      return res.render('signupformadmin', {title: 'Elite Basket', msg:'Username Not Available, Please Try Another One' });
    } else {
    //}
  //});
  //
  adminModel.findOne({Username: username}, {Username: username}).exec((err, dataUsernameInAdmin) => {
      if(err) throw err;
      if(dataUsernameInAdmin != null) {
  
          return res.render('signupformadmin', {title: 'Elite Basket', msg:'Username Already Exists in Admin Data' });
            
      } else {
        // check username in employeesshema
        //

        employeesModel.findOne({Username: username}).exec((err, dataUsernameInEmployees)=> {
          if(err) throw err;
          if(dataUsernameInEmployees != null) {
            return res.render('signupformadmin', {title: 'Elite Basket', msg:'Username Already Exists in Employees Data' });
          } else {



          //}
        //});
        //
        
        customerModel.findOne({Username: username}).exec((err, dataUsernameInCustomers) => {
          if(err) throw err;
          if(dataUsernameInCustomers != null) {
            return res.render('signupformadmin', {title: 'Elite Basket', msg:'Username Already Exists in Customer Data' });

          } else {
            
           //next(); // return res.render('admin', {title: 'SaReGaMa Music Academy & GMP Studio', msg:'Username does not Already Exists in Customer Data' });

           adminModel.findOne({Mobilenumber: mobilenumber}, {Mobilenumber: mobilenumber}).exec((err, dataMobileNumberInAdmin) => {
            if(err) throw err;
            if(dataMobileNumberInAdmin != null) {
              return res.render('signupformadmin', {title: 'Elite Basket', msg:'Mobile Number Already Registered in Admin Data' });
    
            } else {

              // check Mobile Number in employeesshema
        //

        employeesModel.findOne({Mobilenumber: mobilenumber}, {Mobilenumber: mobilenumber}).exec((err, dataMobileNumberInEmployees)=> {
          if(err) throw err;
          if(dataMobileNumberInEmployees != null) {
            return res.render('signupformadmin', {title: 'Elite Basket', msg:'Mobile Number Already Exists in Employees Data' });
          } else {



          //}
        //});
        //

              customerModel.findOne({Mobilenumber: mobilenumber}, {Mobilenumber: mobilenumber}).exec((err, dataMobileNumberInCustomer) => {
                if(err) throw err;
                if(dataMobileNumberInCustomer != null) {
                  return res.render('signupformadmin', {title: 'Elite Basket', msg:'Mobile Number Already Registered in Customer Data' });

                } else {
                  adminModel.findOne({Email: email}, {Email: email}).exec((err, dataEmailInAdminData) => {
                    if(err) throw err;
                    if(dataEmailInAdminData != null) {
                      return res.render('signupformadmin', {title: 'Elite Basket', msg:'Email Id Already Registered in Admin Data' });
    
                    } else {

                       // check Email in employeesshema
        //

        employeesModel.findOne({Email: email}, {Email: email}).exec((err, dataEmailInEmployees)=> {
          if(err) throw err;
          if(dataEmailInEmployees != null) {
            return res.render('signupformadmin', {title: 'Elite Basket', msg:'Email Id Already Exists in Employees Data' });
          } else {



          //}
        //});
        //
                      //next();
                      //return res.render('admin', {title: 'SaReGaMa Music Academy & GMP Studio', msg:'Email Already not Registered in Admin Data' });
                      customerModel.findOne({Email: email}, {Email: email}).exec((err, dataEmailInCustomerData) => {
                        if(err) throw err;
                        if(dataEmailInCustomerData != null) {

                          return res.render('signupformadmin', {title: 'Elite Basket', msg:'Email Already Registered in Customer Data' });

                        } else {
                          //next();
                          adminModel.findOne({Nationalid :nationalid}, {Nationalid :nationalid}).exec((err, dataNationalIdInAdminData) => {
                           if(err) throw err;
                           if(dataNationalIdInAdminData != null) {
                            return res.render('signupformadmin', {title: 'Elite Basket', msg:'National Id Already Registered in Admin Data' });

                           } else {

                              // check National Id in employeesshema
        //

        employeesModel.findOne({Nationalid :nationalid}, {Nationalid :nationalid}).exec((err, dataNationalIdInEmployees)=> {
          if(err) throw err;
          if(dataNationalIdInEmployees != null) {
            return res.render('signupformadmin', {title: 'Elite Basket', msg:'National Id Already Exists in Employees Data' });
          } else {

          //}
        //});
        //
                              adminMembersTeamModel.findOne({Email: email}, {Email: email}).exec((err, registeredNewAdminMemberEmail) => {
                                if(err) throw err;
                                if(registeredNewAdminMemberEmail == null || registeredNewAdminMemberEmail.Email != 'vipinkmboj@gmail.com' || registeredNewAdminMemberEmail.Email != 'vipinkmboj20@gmail.com') {
                                  return res.render('signupformadmin', {title: 'Elite Basket', msg:'Please Enter Registered Email Address or Contact Admin' });

                                } else {                              
                             //
                             //
                            //return res.render('admin', {title: 'SaReGaMa Music Academy & GMP Studio', msg:'National Id Already not Registered in Admin Data' });
                            var adminDetails = new adminModel({
                              Firstname: firstname,
                              Lastname: lastname,
                              Username: username,
                              Mobilenumber: mobilenumber,
                              Email: email,   
                              Nationalid: nationalid,
                              Imagename: nationalidimage,
                              
                              Onetimepassword: Onetimepassword
                              });
                          
                              adminDetails.save((err )=> {
                                if(err) throw err;

                                // save username in the usernames list
                                //
                                var userNameListDetail = new usernamesListModel({
                                  Username: req.body.usrname
                                });
                                userNameListDetail.save((err) => {
                                  if(err) throw err;

                                //});
                                //
                          //Send OTP Email
                                var output = `
                              <h3>Hi, Your One Time Password for Account Activation is ${Onetimepassword}</h3>
                              <p>Please Enter the One Time Password in the opened link and press Activate Account</p>   
                          `;

                          //
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
  Source: 'vipinkmboj21@gmail.com', // must relate to verified SES account
  ReplyToAddresses: [
      email,
  ],
};

// this sends the email
ses.sendEmail(params, (err) => {
  if(err) {
    res.render('signupformadmin', { title: 'Elite Basket', msg:'Error Occured, Email Sending failed', adminDetails: ''}); 
  } else {
    res.render('signupadmin', { title: 'Elite Basket', msg:'Please check the One Time Password (OTP) sent to your Email and enter it here', adminDetails: ''}); 
  }
});
                          //
                          /* UNCOMMENT IT LATER IF NEEDED 
                          var transporter = nodemailer.createTransport({ 
                            service: 'gmail',
                            auth: {    
                              user: process.env.NODEMAILEMAILUSER,
                              pass: process.env.NODEMAILEMAILPASSWORD    
                            }
                          });
                          var mailOption = {
                            from: 'resetpa7@gmail.com',
                            to: email, //or use req.body.email
                            subject: 'One Time Password (OTP) for Account Authentication',
                            html: output
                          };
                          
                          transporter.sendMail(mailOption, function(err, info) {
                            if(err) {
                              res.render('signupadmin', { title: 'frontendwebdeveloper', msg:'Error Occured, Email Sending failed', adminDetails: ''}); 
                            } else {
                              res.render('signupadmin', { title: 'frontendwebdeveloper', msg:'Please check the One Time Password (OTP) sent to your Email and enter it here', adminDetails: ''}); 
                            }
                          }); 
                          UNCOMMENT IT LATER IF NEEDED */

                          //
                        });
                          //
                              });  
                              //
                            }
                          });
                              //
                               //
      } //employeesmodal schema for National Id
    }); //employeesmodal schema National Id
        //
                           }                       
                            
                          });


                        }

                      });
                       //
      } //employeesmodal schema for email
    }); //employeesmodal schema email
        //
                    }


                  });
                  /*next();*/ // return res.render('admin', {title: 'SaReGaMa Music Academy & GMP Studio', msg:'Mobile Number does not Already Registered in Customer Data' });

                }
              });
              //
      } //employeesmodal schema for mobile number
    }); //employeesmodal schema mobile number
        //
            }

          });

           //
          }
        }); 
        //
      } //employeesmodal schema for username
    }); //employeesmodal schema for username
        //
      } 

    });
//
}
});

//
});
//

//Exactly Correct one 

module.exports = router;
