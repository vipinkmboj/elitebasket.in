var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//import express-session
var session = require('express-session')

//Sanitize by Vipin 
const mongoSanitize = require('express-mongo-sanitize');
const xssClean = require('xss-clean');

var indexRouter = require('./routes/index');
var dashboardcustomerRouter = require('./routes/dashboardcustomer');
var usersRouter = require('./routes/users');
var categoriesRouter = require('./routes/categories');
var dashboardcategoriesadminRouter = require('./routes/dashboardcategoriesadmin');
var productsRouter = require('./routes/products');
var dashboardproductsadminRouter = require('./routes/dashboardproductsadmin');
var signupformadminRouter = require('./routes/signupformadmin');
var signupadminRouter = require('./routes/signupadmin');
var signupformemployeesRouter = require('./routes/signupformemployees');
var signupemployeesRouter = require('./routes/signupemployees');
var signupformcustomerRouter = require('./routes/signupformcustomer');
var signupcustomerRouter = require('./routes/signupcustomer');

var signinRouter = require('./routes/signin');
var contactRouter = require('./routes/contact');
var careerRouter = require('./routes/career');
var faqRouter = require('./routes/faq');
var helpRouter = require('./routes/help');
var employeesRouter = require('./routes/employees');
var dashboardemployeesRouter = require('./routes/dashboardemployees');

var adminRouter = require('./routes/admin');
var dashboardadminRouter = require('./routes/dashboardadmin');
var dashboardwebsiteadminRouter = require('./routes/dashboardwebsiteadmin');

var subscribeRouter = require('./routes/subscribe');
var soilRouter = require('./routes/soil');
var compostRouter = require('./routes/compost');
var pottingsoilRouter = require('./routes/pottingsoil');
var vermicompostRouter = require('./routes/vermicompost');
var signoutRouter = require('./routes/signout');
var forgotpasswordRouter = require('./routes/forgotpassword');
var resetpasswordRouter = require('./routes/resetpassword');
var forgotusernameRouter = require('./routes/forgotusername');
var getusernameRouter = require('./routes/getusername');
var editcategoryRouter = require('./routes/editcategory');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());

//Data Sanitization against NoSql Query Injection by Vipin...
app.use(mongoSanitize());
//Data Sanitization against XSS by Vipin...
app.use(xssClean());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// require dot env
require('dotenv').config();
app.use(session({
  secret: process.env.EXPRESS_SESSION_SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));

app.use('/', indexRouter);
app.use('/dashboardcustomer', dashboardcustomerRouter);
app.use('/users', usersRouter);
app.use('/categories', categoriesRouter);
app.use('/dashboardcategoriesadmin', dashboardcategoriesadminRouter);
app.use('/products', productsRouter);
app.use('/dashboardproductsadmin', dashboardproductsadminRouter);
app.use('/signupformadmin', signupformadminRouter);
app.use('/signupadmin', signupadminRouter);
app.use('/signupformemployees', signupformemployeesRouter);
app.use('/signupemployees', signupemployeesRouter);
app.use('/signupformcustomer', signupformcustomerRouter);
app.use('/signupcustomer', signupcustomerRouter);

app.use('/signin', signinRouter);
app.use('/contact', contactRouter);
app.use('/career', careerRouter);
app.use('/faq', faqRouter);
app.use('/help', helpRouter);
app.use('/employees', employeesRouter);
app.use('/dashboardemployees', dashboardemployeesRouter);
app.use('/admin', adminRouter);
app.use('/dashboardadmin', dashboardadminRouter);
app.use('/dashboardwebsiteadmin', dashboardwebsiteadminRouter);
app.use('/subscribe', subscribeRouter);
app.use('/soil', soilRouter);
app.use('/compost', compostRouter);
app.use('/pottingsoil', pottingsoilRouter);
app.use('/vermicompost', vermicompostRouter);
app.use('/signout', signoutRouter);
app.use('/forgotpassword', forgotpasswordRouter);
app.use('/resetpassword', resetpasswordRouter);
app.use('/forgotusername', forgotusernameRouter);
app.use('/getusername', getusernameRouter);
app.use('/editcategory', editcategoryRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
