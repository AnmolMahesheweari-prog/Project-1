const express = require("express");
const followRoute = express.Router();
const identifyUser = require("../Middleware/auth.middleware");
const followController = require("../Controllers/user.controller");

followRoute.post("/follow/:username", identifyUser, followController);

module.exports = followRoute;
