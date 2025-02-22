var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  address: String,
  age:Number,
  imagePath: String
});

module.exports = mongoose.model("User", userSchema);