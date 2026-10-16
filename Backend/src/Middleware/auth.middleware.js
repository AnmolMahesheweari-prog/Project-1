const JWT = require("jsonwebtoken");

async function identifyUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(409).json({
      msg: "user unAuthorized",
    });
  }

  let decode;
  try {
    decode = JWT.verify(token, process.env.JWT_KEY);
  } catch (err) {
    return res.status(401).json({
      msg: "token is invalid",
    });
  }
  req.user = decode;
  next();
}

module.exports = identifyUser;
