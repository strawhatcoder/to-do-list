const express = require('express');
const taskRoutes = require('./routes/tasks');
const app = express();

app.use(taskRoutes);

app.listen(8080, () => {
  console.log('Connected');
})
