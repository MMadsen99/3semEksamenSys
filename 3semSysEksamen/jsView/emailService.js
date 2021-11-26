const nodemailer = require('nodemailer');
require('dotenv/config');

function sendEmail () {
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dummyschool2042@gmail.com',
      pass: 'Zealand11'
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

  let contactForm = document.querySelector('.contactForm');
  let mail = document.getElementById('Mail');
  let phone = document.getElementById('Nr');
  let name = document.getElementById('Navn');
  let message = document.getElementById('Message');
  
  contactForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    let formData = {

      name: name.value,
      email: mail.value,
      phone: phone.value,
      message: message.value
      
    }
    console.log(formData);
  } );



  module.exports = sendEmail();