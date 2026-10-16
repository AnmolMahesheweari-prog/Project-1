const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    default: " ",
  },

  imgURl: {
    type: String,
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;
