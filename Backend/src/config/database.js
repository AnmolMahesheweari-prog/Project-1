const mongoose = require("mongoose");

async function connecToDB() {
  await mongoose.connect(process.env.MONGO_URL);

  console.log("connected To db...");
}

module.exports = connecToDB;
