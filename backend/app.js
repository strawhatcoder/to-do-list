require('dotenv').config();
const express = require('express');
const taskRoutes = require('./routes/tasks');
const app = express();

app.use('/tasks', taskRoutes);

app.listen(8080, () => {
  console.log('Connected');
})
