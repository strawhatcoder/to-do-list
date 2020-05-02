const FormData = require('form-data');
const fetch = require('node-fetch');
const API_URL = process.env.LOCAL_HOST_API;

exports.getTasks = async (req, res, next) => {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    const { message, tasks } = (await response.json())[0];
    res.render('index', { tasks: tasks })
  } catch (error) {
    throw Error(error.message);
  }
};


exports.createTask = async (req, res, next) => {
  const { taskName, taskNote } = req.body;
  const formData = new FormData();
  formData.append('name', taskName);
  formData.append('note', taskNote);

  try {
    await fetch(`${API_URL}/tasks/new-task`, {
      method: 'POST',
      body: formData
    });

    res.redirect('/tasks');

  } catch (error) {
    throw Error(error.message);
  }
};
