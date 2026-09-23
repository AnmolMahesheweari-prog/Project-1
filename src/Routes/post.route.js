// const express = require("express");
// const postRoute = express.Router();
// const postController = require("../controllers/post.controller");
// const multer = require("multer");
// const upload = multer({ storage: multer.memoryStorage() });

// postRoute.post("/", upload.single("imgUrl"), postController);

// module.exports = postRoute;

const express = require("express");
const {
  postController,
  getPostController,
  getPostDetailController,
} = require("../controllers/post.controller");

const postRoute = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require("../middleware/auth.middleware");

postRoute.post("/", upload.single("imgUrl"), identifyUser, postController);
postRoute.get("/", identifyUser, getPostController);
postRoute.get("/detail/:postID", identifyUser, getPostDetailController);
module.exports = postRoute;
