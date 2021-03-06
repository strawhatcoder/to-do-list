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

  const task = await Task.create({
    name: name,
    note: note,
    completed: false
  });

  res.status(201).json({
    message: 'Task Created',
    task: task
  });
};

exports.getTask = async (req, res, next) => {
  const taskId = req.params.taskId;
  const task = await Task.findById(taskId);
  res.status(200).json({
    message: 'Fetched Task',
    task: task
  })
};

exports.editTask = async (req, res, next) => {
  const taskId = req.params.taskId;
  const { name, note } = req.body;
  const task = await Task.findById(taskId);
  const updateProperties = {
    name: name || task.name,
    note: note || task.note,
  }
  const updatedTask = await Task.updateOne(task, updateProperties);
  res.status(200).json({ message: 'Task Updated', task: updatedTask });
};

exports.deleteTask = async (req, res, next) => {
  const taskId = req.params.taskId;
  await Task.deleteOne({ _id: taskId.toString() });
  res.status(200).json({ message: "Task Removed" });
};

exports.completeTask = async (req, res, next) => {
  const taskId = req.params.taskId;
  const task = await Task.findById(taskId);
  await Task.updateOne(task, { $set: { completed: !task.completed } });
  res.status(200).json({ message: "Task Complete" });
};
