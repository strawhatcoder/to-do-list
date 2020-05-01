const fetch = require('node-fetch');
const API_URL = process.env.LOCAL_HOST_API;

exports.getTasks = async (req, res, next) => {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    const { message, tasks } = (await response.json())[0];
    res.render('index', { tasks: tasks})
  } catch (error) {
    throw Error(error.message);
  }
}
