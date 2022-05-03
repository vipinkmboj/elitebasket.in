var mongoose = require('mongoose');
require('dotenv').config();
var uri = process.env.DATABASEADMIN
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
useCreateIndex: true});


var usernamesListSchema = new mongoose.Schema({

Username: {
    type: String,    
},
Date: {
    type: Date,
    default: Date.now
}
});

var usernamesListModel = mongoose.model('usernameslist', usernamesListSchema);
module.exports = usernamesListModel;