const express = require("express");
const app = express();
const PORT = 8000;
var mongoose = require("mongoose");


const form = require("./src/routes/login");
const login = require("./src/models/login");

require('dotenv').config();

mongoose.connect("mongodb://127.0.0.1:27017/login1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json()), 

app.use("/", login);

app.listen(PORT, () => 
console.log(`Server Started at PORT:8000`
));