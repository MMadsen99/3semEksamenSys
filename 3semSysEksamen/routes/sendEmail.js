var express = require('express');
var router = express.Router();

const path = require('path');
const { post } = require('.');
const app = require('../app');
const emailSchema = require('../model/emailSchema');
const nodemailer = require('nodemailer');
const moongose = require('mongoose');
const Mail = require('nodemailer/lib/mailer');

/* GET kontak os page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '/../views/kontaktOs.html'));
  });


// Post request 

  router.post("/", function(req, res,) {

 /*const emailSchema = new moongose.Schema({
        Mail: req.body.Mail,
        PhoneNumber: {type: req.body.Nr, required : true},
        Name: {type: req.body.Name, required : true},
        Message: { type: req.body.Message, required : true}
    })
*/
    function sendEmail () {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: '',
              pass: ''
            }
          });
          
          var mailOptions = {
            from: '',
            to: 'harrispotter.salg@gmail.com',
            subject: 'Spørgsmål',
            text: ''
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        
        
          })};

    sendEmail();
    res.redirect('/sendEmail');

  });

  
  
  module.exports = router;