var mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  songTitle: String,
  singerName: String,
  album: String,
  year: Number,
  description: String,
  imageLink: String,
});

module.exports = mongoose.model("Song", songSchema);
