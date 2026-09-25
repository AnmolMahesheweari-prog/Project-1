const express = require("express");
const app = express();
require("dotenv").config();
const cookie = require("cookie-parser");
const authRoute = require("./Routes/auth.route");
const postRoute = require("./Routes/post.route");
const followRoute = require("./Routes/user.route");
app.use(express.json());
app.use(cookie());
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/user", followRoute);

module.exports = app;
