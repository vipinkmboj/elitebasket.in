var express = require('express');
var router = express.Router();

var productModel = require('../models/productschema');
/* GET home page. */

//Require multer for file upload
var multer = require('multer');
//require path
var path = require('path');
router.use(express.static(path.join(__dirname, './public/')));

//Set Storage Engine for file to be stored
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
  }
});
//init upload
const upload = multer({
  storage: storage,
  limits: {fileSize: 10000000000},
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('productimage');
// Check file type
function checkFileType(file, cb) {
  // Allowed File extentions
  const fileTypes = /jpeg|jpg|png|gif/;
  //Check the Extentions
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);
  if(mimetype && extName) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}


router.get('/', function(req, res, next) {
  var loginUser = {
    loginUserCustomer: req.session.customerLoginUserName,//localStorage.getItem('customerLoginUserName'),
    loginUserEmployee: req.session.employeeLoginUserName,//localStorage.getItem('employeeLoginUserName'),
    loginUserAdmin: req.session.adminLoginUserName//localStorage.getItem('adminLoginUserName')

  };
  if(loginUser.loginUserCustomer) {
    res.redirect('dashboardcustomer');
  } else if(loginUser.loginUserEmployee) {
    res.redirect('dashboardemployees');
  } else if(loginUser.loginUserAdmin) {

    var getAllProducts = productModel.find({});
    getAllProducts.exec((err, allProductsData) => {
      if(err) {
        res.render('dashboardproductsadmin', {title: 'Elite Basket', msg: '', loginUser: loginUser.loginUserAdmin, allProductsData: ''});

      }
      if(allProductsData != null) {
        res.render('dashboardproductsadmin', {title: 'Elite Basket', msg: '', loginUser: loginUser.loginUserAdmin, allProductsData: allProductsData});

      } else {
        res.render('dashboardproductsadmin', {title: 'Elite Basket', msg: 'No Product Found', loginUser: loginUser.loginUserAdmin, allProductsData: ''});

      }
    });
    //res.render('dashboardproductsadmin', {title: 'Elite Basket', msg: '', loginUser: loginUser.loginUserAdmin});
  } else {
      res.redirect('/');
    //res.render('compost', { title: 'Elite Basket', msg: '' });
  }
  
});

router.post('/addproduct', upload, (req, res, next) => {
    var loginUser = req.session.adminLoginUserName;
    if(loginUser) {
        var productDetail = new productModel({
            CategoryName: req.body.selectcategory,
            ProductName: req.body.productname,
            ProductDimensions: req.body.productdimensions,
            ProductFirstAvailable: req.body.productfirstavailable,
            ProductManufacturer: req.body.productmanufacturer,
            ASIN: req.body.asin,
            ItemModelNumber: req.body.itemmodelnumber,
            ItemDimensions: req.body.itemdimensions,
            ProductImageName: req.file.filename,
            Description: req.body.description,
            ProductPrice: req.body.productprice
        });
        productDetail.save((err) => {
            if(err) {
                res.render('dashboardproductsadmin', {title: 'Elite Basket', msg: '', loginUser: loginUser.loginUserAdmin});
            } 
            res.render('dashboardproductsadmin', {title: 'Elite Basket', msg: 'Product Added Successfully!', loginUser: loginUser.loginUserAdmin});


        });
    }
});

router.get('/addproduct', function(req, res, next) {
    var loginUser = {
      loginUserCustomer: req.session.customerLoginUserName,//localStorage.getItem('customerLoginUserName'),
      loginUserEmployee: req.session.employeeLoginUserName,//localStorage.getItem('employeeLoginUserName'),
      loginUserAdmin: req.session.adminLoginUserName//localStorage.getItem('adminLoginUserName')
  
    };
    if(loginUser.loginUserCustomer) {
      res.redirect('dashboardcustomer');
    } else if(loginUser.loginUserEmployee) {
      res.redirect('dashboardemployees');
    } else if(loginUser.loginUserAdmin) {
  
  
      res.render('dashboardproductsadmin', {title: 'Elite Basket', msg: '', loginUser: loginUser.loginUserAdmin});
    } else {
        res.redirect('/');
      //res.render('compost', { title: 'Elite Basket', msg: '' });
    }
    
  });

module.exports = router;
