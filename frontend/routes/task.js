const express = require('express');
const taskController = require('../controllers/task');
const router = express.Router();

router.get('/', taskController.getTasks);
router.get('/:taskId', taskController.getTask);
router.post('/new-task', taskController.createTask);

module.exports = router;
