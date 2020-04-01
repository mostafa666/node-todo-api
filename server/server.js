const express = require("express");
const mongoose = require("./mongoose");
const bodyParser = require("body-parser");

const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  const newUser = new User({
    text: req.body.text
  });
  newUser.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.listen(3000, () => {
  console.log("----------------app runed------------------");
});

module.exports = { app };
