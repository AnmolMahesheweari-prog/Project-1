// const postModel = require("../model/post.model");
// const ImageKit = require("@imagekit/nodejs");
// const { toFile } = require("@imagekit/nodejs");
// const JWT = require("jsonwebtoken");

// const imgkit = new ImageKit({
//   privateKey: process.env["IMAGEKIT_PRIVATE_KEY"],
// });

// async function postController(req, res) {
//   await console.log(req.body, req.file);

//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(409).json({
//       msg: "user unAuthorized",
//     });
//   }

//   const decode = JWT.verify(token, process.env.JWT_KEY);

//   console.log("user", decode);
//   const file = await imgkit.files.upload({
//     file: await toFile(Buffer.from(req.file.buffer), "file"),
//     fileName: "test",
//   });

//   const post = await postModel.create({
//     caption: req.body.caption,
//     imgURL: file.url,
//     user: decode.id,
//   });

//   res.status(201).json({
//     msg: "post created",
//     post,
//   });
// }

// module.exports = postController;

const postModel = require("../model/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const { response } = require("express");
const likeModel = require("../model/likes. model");

const imgkit = new ImageKit({
  privateKey: process.env["IMAGEKIT_PRIVATE_KEY"],
});

async function postController(req, res) {
  await console.log(req.body, req.file);

  const file = await imgkit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "test",
  });

  console.log(file);

  const post = await postModel.create({
    caption: req.body.caption,
    imgURl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    msg: "post created",
    post: post,
  });
}

async function getPostController(req, res) {
  const token = req.cookies.token;

  const userID = req.user.id;
  console.log(userID);

  const posts = await postModel.find({
    user: userID,
  });

  res.status(200).json({
    msg: "post fetched ",
    post: posts,
  });
  console.log({ posts });
}

async function getPostDetailController(req, res) {
  const userID = req.user.id;
  const postID = req.params.postID;

  const post = await postModel.findById(postID);

  if (!post) {
    return res.status(404).json({
      msg: "not found ",
    });
  }

  const isValid = post.user == userID;

  if (!isValid) {
    return res.status(403).json({
      msg: "forbiden content",
    });
  }

  res.status(200).json({
    msg: "post fetched",
    post,
  });
}

async function likeController(req, res) {
  const postID = req.params.postID;
  const username = req.user.username;

  const post = await postModel.findById(postID);

  if (!post) {
    return res.status(404).json({
      msg: "post not found",
    });
  }

  const like = await likeModel.create({
    post: postID,
    user: username,
  });

  res.status(200).json({
    msg: "post liked",
    like,
  });
}

async function getFeedController(req, res) {
  const feeds = await postModel.find().populate("user");
  res.status(200).json({
    msg: "post fetched",
    feeds,
  });
}
module.exports = {
  postController,
  getPostController,
  getPostDetailController,
  likeController,
  getFeedController,
};
