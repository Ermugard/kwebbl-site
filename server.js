const express = require('express');
const path = require('path');
const app = express();
const nodemailer = require('nodemailer');
const bodyparser = require('body-parser');
const nl2br = require('nl2br');
const required = ['name', 'email', 'subject', 'message'];

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, OPTIONS");
  next();
});

app.options('/sendEmail', function (req, res) {
  console.log("cors options");
  res.status(201).send({ "status": 201 });
});

app.post('/sendEmail', function (req, res) {
  let transporter = nodemailer.createTransport({ sendmail: true });

  /*let transporter = nodemailer.createTransport({
    host: 'smtp.example.email',
    port: 587,
    secure: false,
    auth: {
        user: account.user,
        pass: account.pass
    }
  });*/

  /*let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@address.com',
      pass: 'yourpassword'
    }
  });*/
  let error = false;
  required.forEach((field) => {
    if (!req.body[field]) {
      error = true;
    }
  });

  if (error === true) {
    res.status(406).send({ 'status': 406, 'message': 'missing required fields' });
  }

  // setup email data with unicode symbols
  let mailOptions = {
      from: `${req.body.name} <${req.body.email}>`,
      to: 'Kwebbl <ermugard@gmail.com>',
      subject: req.body.subject,
      html: nl2br(req.body.message + "\r\n" +
          '------- Send through kwebbl.com -------' + "\r\n" +
          'Name: ' + req.body.name + "\r\n" +
          'Company: ' + req.body.company + "\r\n" +
          'Email: ' + req.body.email + "\r\n" +
          'Phone: ' + req.body.phone + "\r\n"),
  };

  if (req.body.copy) {
    mailOptions.bcc = req.body.email;
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          res.status(400).send({ "status": 400 });
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.status(201).send({ "status": 201 });
  });
});

app.listen(4000);
