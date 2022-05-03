var mongoose = require('mongoose');
require('dotenv').config();
var uri = process.env.DATABASEADMIN
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
useCreateIndex: true
});


var adminMembersTeamSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
        index: {
                unique: true
            }
    },
/*
    NewMemberEmail: {
    type: String,
    required: true,
    index: {
            unique: true
        }
},
*/
Date: {
    type: Date,
    default: Date.now
}
});

var adminMembersTeamModel = mongoose.model('adminmembersteam', adminMembersTeamSchema);
module.exports = adminMembersTeamModel;