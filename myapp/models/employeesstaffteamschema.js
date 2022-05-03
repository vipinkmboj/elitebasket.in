var mongoose = require('mongoose');
require('dotenv').config();
var uri = process.env.DATABASEADMIN
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
useCreateIndex: true
});


var employeeStaffTeamSchema = new mongoose.Schema({
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

var employeeStaffTeamModel = mongoose.model('employeestaffsteam', employeeStaffTeamSchema);
module.exports = employeeStaffTeamModel;