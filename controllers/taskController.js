const { response } = require("express");
const Task = require("../models/task");

const addTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const data = await task.save();
    res.status(200).json(data);
  } catch (err) {
    // TODO: improve validation of parameters in request body...
    if (err._message == "Task validation failed") {
      res.status(400).json({ msg: "Bad request: invalid parameters" });
    } else {
      res.status(500).json({ msg: "Couldn't add task" });
    }
  }
};

const getTasks = async (req, res) => {
  try {
    const data = await Task.find(req.body, { title: 1, status: 1, tags: 1 });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Couldn't get tasks" });
  }
};

const getTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Task.findById(id);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Couldn't get task details" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Task.findByIdAndDelete(id);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Couldn't delete task" });
  }
};

module.exports = {
  addTask,
  getTasks,
  getTaskById,
  deleteTask,
};
