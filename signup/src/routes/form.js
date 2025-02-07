
const express = require("express");
const formRouter = express.Router();
const { upload } = require("../middlewares/multer");
const formController = require("../controllers/formcontroller");

formRouter.get("/", formController.getForm);
formRouter.post("/", upload.single("imagePath"), formController.uploadForm);

module.exports = formRouter;
