const express = require('express');
const taskController = require('../controllers/tasks');
const router = express.Router();

router.get('/', taskController.getTasks);
router.get('/:taskId', taskController.getTask);
router.post('/new-task', taskController.createTask);
router.put('/:taskId', taskController.editTask);
router.delete('/:taskId', taskController.deleteTask);

module.exports = router
