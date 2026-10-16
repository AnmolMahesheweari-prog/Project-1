const app = require("./src/index");
const connecToDB = require("./src/config/database");

connecToDB();
app.listen(3000, () => {
  console.log("server is runing...");
});
