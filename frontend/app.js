require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/task');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.use('/tasks', taskRoutes);

app.listen(3000, () => {
  console.log('Connected');
});
