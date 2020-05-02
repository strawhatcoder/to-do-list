const Task = require('../models/task');

exports.getTasks = async (req, res, next) => {

  const tasks = await Task.find();

  res.status(200).json([
    {
      message: 'Fetched Tasks',
      tasks: tasks
    }
  ])
};

exports.createTask = async (req, res, next) => {
  const { name, note } = req.body;

  await Task.create({
    name: name,
    note: note,
    completed: false
  });

  res.status(201).json({
    message: 'Task Created'
  });
};

exports.getTask = async (req, res, next) => {
  const taskId = req.params.taskId;
  const task = await Task.findById(taskId);

  res.status(302).json({
    message: 'Fetched Task',
    task: task
  })
};
