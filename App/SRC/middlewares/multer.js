const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./SRC/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
    //cb(null, Date.now() + Path2D.extname(file.originalname))
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
