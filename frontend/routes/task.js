const express = require('express');
const taskController = require('../controllers/task');
const router = express.Router();

router.get('/', taskController.getTasks);
router.get('/:taskId', taskController.getTask);
router.post('/new-task', taskController.createTask);
router.get('/edit-task/:taskId', taskController.getEditTaskForm);
router.post('/:taskId', taskController.editTask);
router.get('/remove-task/:taskId', taskController.deleteTask);
router.get('/complete/:taskId', taskController.complete);

module.exports = router;
