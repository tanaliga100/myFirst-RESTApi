const mongoose = require("mongoose");

const TaskScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must be provided"],
    trim: true,
    maxLength: [100, "name can not be more than 100 characters long"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskScheme);
