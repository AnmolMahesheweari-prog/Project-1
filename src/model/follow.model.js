const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    follower: {
      type: String,
      ref: "users",
      required: true,
    },

    followeee: {
      type: String,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
const followModel = mongoose.model("follow", followSchema);
module.exports = followModel;
