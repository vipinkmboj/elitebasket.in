var mongoose = require('mongoose');
require('dotenv').config();
var uri = process.env.DATABASEADMIN
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
useCreateIndex: true});
var conn = mongoose.Collection;

var OutboxSchema = new mongoose.Schema({

MessageTo: {
    type: String,
    required: true
},

Message: {
    type: String,
    required: true
},
Date: {
    type: Date,
    default: Date.now
}
});

var outboxModel = mongoose.model('outbox', OutboxSchema);
module.exports = outboxModel;