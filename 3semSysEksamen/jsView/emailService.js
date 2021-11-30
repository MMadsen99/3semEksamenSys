const nodemailer = require('nodemailer');

require('dotenv/config');


function sendEmail () {
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',
      pass: ''
    }
  });
  
  var mailOptions = {
    from: 'dummyschool2042@gmail.com',
    to: 'harrispotter.salg@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }


  })};



module.exports = {sendEmail};



