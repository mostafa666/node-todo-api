const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const urlConected = "mongodb://localhost:27017/todos";
mongoose.connect(urlConected);
