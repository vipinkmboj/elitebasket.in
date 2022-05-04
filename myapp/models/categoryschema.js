var mongoose = require('mongoose');
require('dotenv').config();
var uri = process.env.DATABASEADMIN
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true//, useFindAndModify: false,
//useCreateIndex: true
});


var categorySchema = new mongoose.Schema({

CategoryName : {
    type: String,
    //required: true
},
CategoryImageName: {
    type: String,
    

},

Date: {
    type: Date,
    default: Date.now
}
});

var categoryModel = mongoose.model('categories', categorySchema);
module.exports = categoryModel;
