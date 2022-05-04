var express = require('express');
var router = express.Router();

var categoryModel = require('../models/categoryschema');

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
}).single('categoryimage');
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
    var loginUser = req.session.adminLoginUserName;
    if(loginUser) {
        res.render('editcategory', { title: 'Elite Basket', msg: '', loginUser: loginUser });
    } else {
      
      res.redirect('/');
    }  
  });

  router.post('/', upload, function(req, res, next) {
    var loginUser = req.session.adminLoginUserName;
    if(loginUser) {
      var editCategoryDetail = categoryModel.findByIdAndUpdate(req.body.id, {
        CategoryName: req.body.categoryname,
        CategoryImageName: req.file.filename
      });
      editCategoryDetail.exec((err) => {
        if(err) {
          res.redirect('dashboardcategoriesadmin');
        } else {
          res.redirect('dashboardcategoriesadmin');
        }
  
      });  
    } else {
      res.redirect('/');
    }
  });
  

  module.exports = router;