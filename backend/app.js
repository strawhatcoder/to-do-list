require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const taskRoutes = require('./routes/tasks');

const app = express();

app.use(bodyParser.json());
app.use(multer().none());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use('/tasks', taskRoutes);

mongoose.connect(process.env.DB_HOST, {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  useNewUrlParser: true,
  useUnifiedTopology: true
  })
  .then(results => {
  console.log('Connected')
  app.listen(8080)
  })
  .catch(err => console.log(err));
