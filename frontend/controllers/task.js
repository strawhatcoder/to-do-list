const fetch = require('node-fetch');
const URL = process.env.LOCAL_HOST_API;

exports.getTasks = async (req, res, next) => {
  try {
    const response = await fetch(`${URL}/tasks`);
    const data = await response.json();
    res.render('index', { tasks: data })
  } catch (error) {
    throw Error(error.message);
  }
}
