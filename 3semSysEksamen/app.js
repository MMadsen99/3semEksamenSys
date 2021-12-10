var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');
const connect = require('./database/connect');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');

const connectDB = require('./database/connect');
var app = express();

// view engine setup'´
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs','html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
/*
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/admin/onlineLager', adminRouter);
*/
 async function start(){

  try{
    await connectDB(process.env.CONNECT_TO_DB);
    console.log('Connected to db');
  }catch(error){
  console.log(error);
  }
  
}


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

start();

module.exports = app;
