const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const Joi = require("joi");
// create admin

const create = async (req, res) => {
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

  const hashPass = await bcrypt.hash(password, 12);

  Admin.create({ username: username, password: hashPass });
  res.status(201).json({ message: "Created" });
};

// read

const read = async (req, res) => {
  const admins = await Admin.find();
  res.status(200).json({ message: "Ok", data: admins });
};

// get One

const getOne = async (req, res) => {
  const { id } = req.params;
  const findAdmin = await Admin.findById(id);
  res.status(200).json({ message: "Ok", data: findAdmin });
};

// update Admin

const update = async (req, res) => {
  const { id } = req.params;
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

  const hashPass = await bcrypt.hash(password, 12);

  await Admin.findByIdAndUpdate(id, {
    $set: {
      username: username,
      password: hashPass,
    },
  });
  res.status(200).json({ message: "Updated" });
};

// delete Admin

const deleted = async (req, res) => {
  const { id } = req.params;
  await Admin.findByIdAndDelete(id);

  res.status(200).json({ message: "deleted" });
};

module.exports = { create, read, update, deleted, getOne };
