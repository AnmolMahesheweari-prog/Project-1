const followModel = require("../model/follow.model");

async function followController(req, res) {
  const followername = req.user.username;
  const followeename = req.params.username;

  console.log(followername);

  const followRecord = await followModel.create({
    follower: followername,
    followeee: followeename,
  });

  res.status(201).json({
    msg: `you are  now following ${followeename}`,
    follow: followRecord,
  });
}

module.exports = followController;
