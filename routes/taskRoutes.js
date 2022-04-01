const express = require("express");

const taskController = require("../controllers/taskController");

const router = express.Router();

router.post("/", taskController.addTask);
router.get("/", taskController.getTasks);
router.get("/:id", taskController.getTaskById);

module.exports = router;
