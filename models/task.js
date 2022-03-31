const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Next up", "In progress", "Completed"],
      default: "Next up",
    },
    description: {
      type: String,
      required: false,
    },
    deadline: {
      type: Date,
      required: false,
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  { tymestamps: true }
);

const previewSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Next up", "In progress", "Completed"],
    default: "Next up",
  },
  deadline: {
    type: Date,
    required: false,
  },
});

const Task = mongoose.model("Task", taskSchema);
// const PreviewOfTask = mongoose.model("Task", previewSchema);

module.exports = Task;
