const express = require("express");
const authRoute = express.Router();
const { login, register } = require("../controllers/auth.controller");

console.log(typeof login, typeof register);
authRoute.post("/register", register);

authRoute.post("/login", login);

module.exports = authRoute;
