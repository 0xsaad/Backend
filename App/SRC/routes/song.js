const express = require("express");
const songRouter = express.Router();
//const {tokenVerifier} = require('../middlewares/tokenVerifier');
const songController = require("../controllers/appcontroller");
const multer = require("multer");
const { upload } = require("../middlewares/multer");

songRouter.get("/", songController.getSong);
songRouter.post("/", upload.single("picture"), songController.uploadSong);

module.exports = songRouter;
