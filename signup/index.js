const express = require("express");
const app = express();
var mongoose = require("mongoose");
const formRouter  = require("./src/routes/form");
const loginRouter = require("./src/routes/login");
const PORT = 3000;
require('dotenv').config();

mongoose.connect("mongodb://127.0.0.1:27017/signup", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json()), 
app.use("/signup", formRouter);
app.use("/login", loginRouter);
//app.use("/", form);
app.listen(PORT, () => console.log(`Server Started at PORT:3000`));
