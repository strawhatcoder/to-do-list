const FormData = require('form-data');
const fetch = require('node-fetch');
const API_URL = process.env.LOCAL_HOST_API;

exports.getTasks = async (req, res, next) => {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    const { tasks } = (await response.json())[0];
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

exports.getTask = async (req, res, next) => {
  const taskId = req.params.taskId;
  const response = await fetch(`${API_URL}/tasks/${taskId}`);
  const data = await response.json();

  res.render('task', {
    task: data.task
  })
};

exports.getEditTaskForm = async (req, res, next) => {
  const taskId = req.params.taskId;
  const response = await fetch(`${API_URL}/tasks/${taskId}`);
  const data = await response.json();

  res.render('edit-form', {
    task: data.task
  })
};

exports.editTask = async (req, res, next) => {
  const taskId = req.params.taskId;
  const { taskName, taskNote } = req.body;
  const formData = new FormData();
  formData.append('name', taskName);
  formData.append('note', taskNote);

  await fetch(`${API_URL}/tasks/${taskId}`, {
    method: 'PUT',
    body: formData
  })

  res.redirect('/tasks');
};

exports.deleteTask = async (req, res, next) => {
  const taskId = req.params.taskId;
  await fetch(`${API_URL}/tasks/${taskId}`, {
    method: "DELETE"
  });
  res.redirect('/tasks');
};
