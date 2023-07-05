const Admin = require("../models/Admin");

// create admin

const create = async (req, res) => {
  const { username, password } = req.body;
  Admin.create({ username, password });
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
  await Admin.findByIdAndUpdate(id, {
    $set: {
      username,
      password,
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
