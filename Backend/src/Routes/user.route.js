const express = require("express");
const followRoute = express.Router();
const identifyUser = require("../Middleware/auth.middleware");
const {
  followController,
  unFollowController,
} = require("../Controllers/user.controller");

followRoute.post("/follow/:username", identifyUser, followController);
followRoute.delete("/follow/:username", identifyUser, unFollowController);

module.exports = followRoute;
