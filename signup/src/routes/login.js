const express = require("express");
const loginRouter = express.Router();
const loginController = require("../controllers/loginController");

loginRouter.post("/", loginController.verify);

module.exports = loginRouter;