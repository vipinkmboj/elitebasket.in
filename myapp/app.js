var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoriesRouter = require('./routes/categories');
var productsRouter = require('./routes/products');
var signupadminRouter = require('./routes/signupadmin');
var signinRouter = require('./routes/signin');
var contactRouter = require('./routes/contact');
var careerRouter = require('./routes/career');
var faqRouter = require('./routes/faq');
var helpRouter = require('./routes/help');
var employeesRouter = require('./routes/employees');
var adminRouter = require('./routes/admin');
var subscribeRouter = require('./routes/subscribe');
var soilRouter = require('./routes/soil');
var compostRouter = require('./routes/compost');
var pottingsoilRouter = require('./routes/pottingsoil');
var vermicompostRouter = require('./routes/vermicompost');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);
app.use('/signupadmin', signupadminRouter);
app.use('/signin', signinRouter);
app.use('/contact', contactRouter);
app.use('/career', careerRouter);
app.use('/faq', faqRouter);
app.use('/help', helpRouter);
app.use('/employees', employeesRouter);
app.use('/admin', adminRouter);
app.use('/subscribe', subscribeRouter);
app.use('/soil', soilRouter);
app.use('/compost', compostRouter);
app.use('/pottingsoil', pottingsoilRouter);
app.use('/vermicompost', vermicompostRouter);




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
