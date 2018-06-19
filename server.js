const express = require('express');
const path = require('path');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.static(path.join(__dirname, 'build')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.get('/sendMail', function (req, res) {
  console.log("send mail");
  res.status(201).send({ "status": 201 });

});

app.options('/sendMail', function (req, res) {
  console.log("send mail");
  res.status(201).send({ "status": 201 });

});

app.post('/sendMail', function (req, res) {
  console.log("send mail", req);
  res.status(201).send({ "status": 201 });

});

app.listen(4000);