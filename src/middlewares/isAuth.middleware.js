const jwt = require("jsonwebtoken");
const config = require("../../config/config");

const isAuth = async (req, res, next) => {
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];

  if (!token) return res.status(401).json({ message: "Token not found" });
  const verify = jwt.verify(token, config.SECRET_KEY);
  req.user = verify;

  next();
};

module.exports = isAuth;
