const express = require('express');
const taskController = require('../controllers/tasks');
const router = express.Router();

router.get('/', taskController.getTasks);

module.exports = router
