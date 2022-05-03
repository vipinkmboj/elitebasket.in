var mongoose = require('mongoose');
require('dotenv').config();
var uri = process.env.DATABASEADMIN
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
useCreateIndex: true});


var uploadSchema = new mongoose.Schema({
Username: {
    type: String
},
Filename: {
    type: String
},
Date: {
    type: Date,
    default: Date.now
}
});

var uploadModel = mongoose.model('uploaded_files', uploadSchema);
module.exports = uploadModel;