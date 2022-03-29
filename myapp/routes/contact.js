var express = require('express');

var router = express.Router();
var contactModel = require('../models/contactschema');


//var contactModel = require('../models/contactschema');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Elite Basket', msg: '' });
});

//contact

router.post('/', function(req, res, next) {
  var contactDetails = new contactModel({
    FirstName: req.body.firstname,
    LastName: req.body.lastname,
    MobileNumber: req.body.mobilenumber,
    Email: req.body.email,
    Message: req.body.writemessage
  });
  contactDetails.save((err) => {
    if(err) {
      res.render('contact', { title: 'Elite Basket', msg: 'Message Not Sent, Try Again!' });

    } 
    res.render('index', { title: 'Elite Basket', msg: 'Message Submited Successfully! We will contact you soon!' });

  });
  //res.render('contact', { title: 'Elite Basket', msg: '' });
});


module.exports = router;
