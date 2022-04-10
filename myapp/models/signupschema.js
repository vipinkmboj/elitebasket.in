var mongoose = require('mongoose');
require('dotenv').config();
var uri = process.env.DATABASEADMIN
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, /*useFindAndModify: false,
useCreateIndex: true*/});


var signUpSchema = new mongoose.Schema({

FirstName : {
    type: String,
    required: true
},
LastName : {
    type: String,
    required: true
},
MobileNumber: {
    type: String,
    required: true
},
Email: {
    type: String,
    required: true
    
},
Username: {
    type: String,
    required: true
},
Password: {
    type: String,
    required: true
},
Date: {
    type: Date,
    default: Date.now
}
});

var signUpModel = mongoose.model('admins', signUpSchema);
module.exports = signUpModel;