var mongoose = require('mongoose');
require('dotenv').config();
var uri = process.env.DATABASEADMIN
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, /*useFindAndModify: false,
useCreateIndex: true*/});


var subscribeSchema = new mongoose.Schema({

FullName : {
    type: String,
    required: true
},
Email: {
    type: String,
    required: true
    
},
MobileNumber: {
    type: String,
    required: true
},
Date: {
    type: Date,
    default: Date.now
}
});

var subscribeModel = mongoose.model('allsubscriptions', subscribeSchema);
module.exports = subscribeModel;