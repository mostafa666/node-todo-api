const mongoose = require("mongoose");

const Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    required: true,
    trim: true,
    default: false
  },
  completedAt: {
    type: Number,
    required: true,
    trim: true,
    default: 111
  }
});

module.exports = {
  Todo
};
