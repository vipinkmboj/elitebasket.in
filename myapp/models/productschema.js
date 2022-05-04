var mongoose = require('mongoose');
require('dotenv').config();
var uri = process.env.DATABASEADMIN
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true//, useFindAndModify: false,
//useCreateIndex: true
});


var productSchema = new mongoose.Schema({

CategoryName : {
    type: String,
    //required: true
},
ProductName: {
    type: String,
    

},
ProductDimensions: {
    type: String,
    

},

ProductFirstAvailable: {
    type: String,
    

},
ProductManufacturer: {
    type: String,
    

},
ASIN: {
    type: String,
    

},
ItemModelNumber: {
    type: String,
    

},
ItemDimensions: {
    type: String,
    

},
ProductImageName: {
    type: String,
    

},

Description: {
    type: String,
    

},

ProductPrice: {
    type: String,
    

},

Date: {
    type: Date,
    default: Date.now
}
});

var productModel = mongoose.model('products', productSchema);
module.exports = productModel;
