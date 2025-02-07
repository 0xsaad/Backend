const express = require("express");
const app = express();
var mongoose = require("mongoose");
const PORT = 8000;

const song = require("./SRC/routes/song");

// mongoose.set("strictQuery", false);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//     //cb(null, Date.now() + Path2D.extname(file.originalname))
//   },
// });

//const upload = multer({ storage: storage });
mongoose
  .connect("mongodb://127.0.0.1:27017/App", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json())
app.use("/", song);
app.listen(PORT, () => console.log(`Server Started at PORT:8000`));

// Things to study before starting ye wala kaam ====> What? Why? how?
// 1. JSON objects?
// 2. What is an API? In technical terms.
// 3. Middleware?
// 4. Github commands to know
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/0xsaad/App.git
// git push -u origin main

// app.get("/", (req, res) => {
//        // 1.
//   });

// app.post("/", (req,res) => {
//         const Song1 = {
//           Song: req.file.SongName,
//           Description: req.file.SongDescription,
//           Singer: req.file.SingerName,
//           res.send(`${Song1}!`)
//         };
//         res.render("images", { images });
//       });
// 1. Get keys from body. =========> body main jo elem, wo req main sy kesy get krny hain
// 2. Save them in DB. ========> database main save kesy krna h
/**
 * response =====> {
 *  message: "Song uploaded!"
 *  data: songObj
 * }
 */
