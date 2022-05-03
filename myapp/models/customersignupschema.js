var mongoose = require('mongoose');
require('dotenv').config();
var uri = process.env.DATABASEADMIN
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true//, useFindAndModify: false,
    //useCreateIndex: true
});



var customerSignupSchema = new mongoose.Schema({

Firstname : {
    type: String,
    required: true
},
Lastname: {
    type: String,
    required: true
},
Username: {
    type: String,
    required: true,
    index: {
        unique: true
    }
},
Mobilenumber : {
    type: String,
    required: true,
    index: {
        unique: true
    }
},
Email: {
    type: String,
    required: true,
    index: {
            unique: true
        }
},
Password: {
    type: String
    // required: true
},
Onetimepassword: {
    type: String
  //  required: true    
}, 
ProfileImage: {
    type: String
  //  required: true    
},
Date: {
    type: Date,
    default: Date.now
}
});

var customerSignupModel = mongoose.model('customers', customerSignupSchema);
module.exports = customerSignupModel;