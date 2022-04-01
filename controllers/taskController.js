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

const getTasks = async (req, res) => {
  try {
    const data = await Task.find();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

const getTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Task.findById(id);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

module.exports = {
  addTask,
  getTasks,
  getTaskById,
};
