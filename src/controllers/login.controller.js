const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const Joi = require("joi");

const login = async (req, res) => {
  const { username, password } = req.body;

  //VALIDATION
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  const { error } = schema.validate({ username, password });
  if (error) {
    return res.status(403).json({ error: error.message });
  }

  const admin = await Admin.findOne({ username });

  if (!admin)
    return res.status(403).json({ message: "Invalid username or password" });

  const compare = await bcrypt.compare(password, admin.password);
  if (!compare)
    return res.status(403).json({ message: "Invalid username or password" });
  const token = jwt.sign({ id: admin.id }, config.SECRET_KEY);

  res.status(200).json({ token: token });
};

module.exports = { login };
