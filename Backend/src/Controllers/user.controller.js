const followModel = require("../model/follow.model");
const userModel = require("../model/user.model");

async function followController(req, res) {
  const followername = req.user.username;
  const followeename = req.params.username;

  const alreadyFollow = await followModel.findOne({
    follower: followername,
    followeee: followeename,
  });

  if (alreadyFollow) {
    return res.send(200).json({
      msg: "you are already following ",
    });
  }
  if (followeename == followername) {
    return res.status(409).json({
      msg: "your cannot follow yourself",
    });
  }

  const isfolloweename = await userModel.findOne({
    username: followeename,
  });

  if (!isfolloweename) {
    return res.status(404).json({
      msg: "user you are trying to followee not found",
    });
  }

  const followRecord = await followModel.create({
    follower: followername,
    followeee: followeename,
  });

  res.status(201).json({
    msg: `you are  now following ${followeename}`,
    follow: followRecord,
  });
}

async function unFollowController(req, res) {
  const followeename = req.params.username;
  const followername = req.user.username;

  console.log(followeename, followername);
  const isFollow = await followModel.findOne({
    follower: followername,
    followeee: followeename,
  });

  console.log(isFollow);

  if (!isFollow) {
    return res.status(409).json({
      msg: "you are not following",
    });
  }

  await followModel.findByIdAndDelete(isFollow._id);

  res.status(200).json({
    msg: "you have unFollowed",
  });
}

module.exports = { followController, unFollowController };
