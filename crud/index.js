var express = require("express");
var app = express();
var mongoose = require("mongoose");
var Singer = require("./index.js");
var bodyParser = require("body-parser");
const multer = require("multer");
const fs = require('fs');
//const imageController = require('./src/controller/valuesController.js');

//app.get('/images/:imageName', imageController.findImageFile);


mongoose.set("strictQuery", false);

const multer = require("multer")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
    //cb(null, Date.now() + Path2D.extname(file.originalname))
  },
});

const upload = multer({ storage: storage });

mongoose.connect("mongodb://127.0.0.1:27017/crud", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`Connected!`);
  })
  .catch((err) => {
    console.log(`DisConnected! `, err.message);
  });



var connection = mongoose.connection;

connection.once("open", function () {
  console.log("connection successfully....");
});



app.set("view engine", "ejs");

app.post("/upload", upload.single("images"), (req, res) => {
  const images = {
    name: req.file.originalname,
    image: req.file.originalname,
    // size: req.file.size,
    // mimetype: req.file.mimetype,
    path: req.file.path,
  };
  res.render("images", { images });
  //console.log('image uploaded');
  //res.send("image uploaded");
});


app.get("/upload", (req, res) => {
  res.render("upload");
});

app.get("/", function (req, res) {
  res.render("insert");
});

new app.post("/insert", function (req, res) {
  var singer = new Singer({
    name: req.body.name, 
    song: req.body.song,
    band: req.body.band,
  });
  singer.save(() => {
    res.send("<h1>Data Sent</h1>"); 
  });
});

app.get("/show", function (req, res) {
  Singer.find({}, function (err, result) {
    res.render("show", { singers: result });
  });
});

app.get("/delete/:id", async function (req, res) {
  await Singer.findByIdAndDelete(req.params.id);
  res.redirect("/show");
});


//app.get("/edit/:id", middleware, controller);
app.get("/edit/:id", function (req, res) {
  Singer.findById(req.params.id, function (err, result) {
    res.render("edit", { singers: result });
  });
});

app.post("/update/:id", async function (req, res) {
  await Singer.findByIdAndUpdate(req.params.id, req.body); 
  res.redirect("/show");
});

var server = app.listen(3000, function () {
  console.log("Server started on port 3000");
});
