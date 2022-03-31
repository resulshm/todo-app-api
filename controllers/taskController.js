const Task = require("../models/task");

const addTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const data = await task.save();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

module.exports = {
  addTask,
};
