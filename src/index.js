const express = require("express");
const app = express();
require("dotenv").config();
const cookie = require("cookie-parser");
const authRoute = require("./Routes/auth.route");
const postRoute = require("./Routes/post.route");

app.use(express.json());
app.use(cookie());
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

module.exports = app;
