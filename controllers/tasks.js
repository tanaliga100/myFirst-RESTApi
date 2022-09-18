// MODELS
const Task = require("../models/Tasks");
// MIDDLEWARE
const asyncWrapper = require("../middleware/Async-Wrapper");

// CONTROLLERS

// GET ALL TASKS
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  // sample responses
  // res.status(200).json({ tasks, amount: tasks.length, success: true });
  // res.status(200).json({ tasks, amount: tasks.length, success: true });
  res
    .status(200)
    .json({ tasks, data: { status: "success", nbHits: tasks.length } });
});

// CREATE TASK
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

// GET SINGLE-TASK
const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return res.status(404).json({ message: `No Task with this id: ${taskID}` });
  }
  res.status(200).json({ task: task });
});

// DELETE TASK
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res
      .status(404)
      .json({ message: `No Task with this id: ${taskID}, CANT DELETE` });
  }
  res
    .status(200)
    .json({ task: task, msg: `Task successfully deleted ${task.name}` });
  res.status(500).json({ msg: error });
});

// UPDATE TASK
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: "Task not found" });
  }
  return res.status(200).json({ task: task });
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
