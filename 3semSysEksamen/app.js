var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);

const lagerSchema = {

  title: String,
  quantity: Number,
  Material: String,
  outside: Boolean,
  inside: Boolean
}
const Note = mongoose.model("onlineLager",lagerSchema);

app.post("/", function(req, res){
let newNote = new Note(
  {
    title: req.body.fname,
    quantity: req.body.aname,
    Material: req.body.lname,
    outside: req.body.sname,
    inside: req.body.sname,
  })
  newNote.save();
  res.redirect('/../views/admin');
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


//Connect to database
try{
  mongoose.connect(process.env.CONNECT_TO_DB);
  console.log("Connected to DB")
  
  }catch(error){
      console.log(error);
  }

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
