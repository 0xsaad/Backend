const express = require("express");
const loginRouter = express.Router();

const { upload } = require("../middlewares/multer");
const loginController = require("../controllers/loginController");

loginRouter.get("/", loginController.logingetForm);
loginRouter.post("/", upload.single("imagePath"), loginController.loginuploadForm);

module.exports = loginRouter;