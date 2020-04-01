const mongoose = require("mongoose");

const User = mongoose.model("User", {
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
  User
};
