const userModel = require("../model/user.model");
const crypto = require("crypto");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function register(req, res) {
  const { username, email, password, bio, profileImg } = req.body;

  const userExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (userExist) {
    return res.status(409).json({
      msg: "user already exist",
    });
  }

  const hash = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    username,
    email,
    password: hash,
    bio,
    profileImg,
  });

  const token = JWT.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_KEY,
  );

  res.cookie("token", token);

  res.status(201).json({
    msg: "user register...",
    user: {
      username,
      email,
      bio,
      profileImg,
    },
  });
}

async function login(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    return res.status(404).json({
      msg: "user Not found",
    });
  }

  const hash = bcrypt.hash(password, 10);
  const validpass = bcrypt.compare(password, user.password);

  if (!validpass) {
    return res.status(400).json({
      msg: "password is invalid",
    });
  }

  const token = JWT.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_KEY,
  );

  res.cookie("token", token);
  res.status(200).json({
    msg: "loggedin",
    user: {
      user: user.username,
      email: user.email,
      bio: user.bio,
      profileImg: user.profileImg,
    },
  });
}

module.exports = {
  register,
  login,
};
