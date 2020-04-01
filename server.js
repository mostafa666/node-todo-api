// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

// const urlConnected = "mongodb://localhost:27017/todos";
// mongoose.connect(urlConnected);

// const TodoSchema = {
//   text: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   },
//   completedAt: {
//     type: Number
//   }
// };

// var Todo = mongoose.model("todo", TodoSchema);

// const newTodo = new Todo({
//   text: "hello world",
//   completed: false,
//   completedAt: 123
// });

// newTodo.save().then(
//   doc => {
//     console.log(JSON.stringify(doc, undefined, 4));
//   },
//   err => {
//     console.log(err);
//   }
// );

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const urlConnected = "mongodb://localhost:27017/ali";

mongoose.connect(urlConnected);
const userModel = {
  name: {
    type: String
    // required: true,
    // trim: true,
    // minLenght: 3
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minLenght: 2
  }
};
const User = mongoose.model("Userasd", userModel);

const newUser = new User({
  name: "msdfo",
  email: "s"
});

newUser.save().then(
  doc => {
    console.log(JSON.stringify(doc, undefined, 4));
  },
  err => {
    console.log(err);
  }
);
