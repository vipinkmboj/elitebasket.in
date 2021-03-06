var express = require('express');
var router = express.Router();
var adminModel = require('../models/adminschema');
var customerModel = require('../models/customersignupschema');
var employeesModel = require('../models/employeessignupschema');
var adminMembersTeamModel = require('../models/adminmembersteamschema');
var usernamesListModel = require('../models/usernameslistschema');

var categoryModel = require('../models/categoryschema');
/* GET home page. */
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

    res.redirect('/');
    //res.render('index', { title: 'Elite Basket', msg:'', allCategoriesData: allCategoriesData});
  } 
});

router.post('/', function(req, res, next) {
  if(process.env.PASS == req.body.adminpass) {
    res.render('admin', { title: 'Elite Basket', msg: '', allCategoriesData: '' });
  } else {
    // Get Categories from database
    var getAllCategories = categoryModel.find({});
    getAllCategories.exec((err, allCategoriesData) => {
      if(err) {
        res.render('index', { title: 'Elite Basket', msg:'Incorrect Admin Pass', allCategoriesData: ''});
      }
      if(allCategoriesData != null) {
        res.render('index', { title: 'Elite Basket', msg:'Incorrect Admin Pass', allCategoriesData: allCategoriesData});
      } else {
        res.render('index', { title: 'Elite Basket', msg:'Incorrect Admin Pass', allCategoriesData: ''});
      }
    });
    //res.render('index', { title: 'Elite Basket', msg: 'Incorrect Admin Pass', allCategoriesData: ''});
  }
  

  
});



  // Sign up Account Activation with OTP strts here
router.post('/accountactivatedadmin', function(req, res, next) {
  var oneTimePassword = req.body.otp;
  var password = req.body.password;
  var confirmPassword = req.body.cnfpassword;
  if(password != confirmPassword || password == '' || confirmPassword == '') {
    res.render('signupadmin', { title: 'Quick Website', msg:'Password Not Matched, Please Try again', adminDetails: ''});
  } else {
    password = bcrypt.hashSync(req.body.password, 10);
    var getAdminDetails = adminModel.findOne({Onetimepassword: oneTimePassword}, {});
    getAdminDetails.exec((err, ExistingAdminDetails)=> {
      if(err) throw err;
      if(ExistingAdminDetails == null || ExistingAdminDetails == '') {
        res.render('signupadmin', { title: 'Quick Website', msg:'Wrong OTP Entered, Please Try again', adminDetails:''});

      } else {
        var getAdminId = ExistingAdminDetails._id;
        
        adminModel.findByIdAndUpdate(getAdminId, {Onetimepassword: null, Password: password}, {upsert: true}, function(err, updatedAdminDetails){
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
            Data: `${updatedAdminDetails.Username} just registered to www.quickwebsite.net`
        }
    },
    Source: 'contact@quickwebsite.net',//'vipinkmboj21@gmail.com', // must relate to verified SES account
    ReplyToAddresses: [
      updatedAdminDetails.Email,
      //'vipinkmboj211@gmail.com',
      'admin@quickwebsite.net'
    ],
  };
  
  // this sends the email
  ses.sendEmail(params, (err) => {
    if(err) {
      res.render('admin', { title: 'Quick Website', msg:'Account Activated Successfully, You may log in now', adminDetails: ''});
    } else {
      res.render('admin', { title: 'Quick Website', msg:'Account Activated Successfully, You may log in now', adminDetails: ''});
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


//uncomment it later if needed*/

module.exports = router;








