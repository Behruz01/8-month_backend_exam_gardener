const Client_say = require("../models/Client_say");

// create Client_say

const create = async (req, res) => {
  const { fullname, description, profession } = req.body;
  const { imageName: imageLink } = req;

  Client_say.create({
    imageLink,
    fullname,
    description,
    profession,
  });
  res.status(201).json({ message: "Created" });
};

// read

const read = async (req, res) => {
  const messages = await Client_say.find();
  res.status(200).json({ message: "Ok", data: messages });
};

// get One

const getOne = async (req, res) => {
  const { id } = req.params;
  const message = await Client_say.findById(id);
  res.status(200).json({ message: "Ok", data: message });
};

// update Client_say

const update = async (req, res) => {
  const { id } = req.params;
  const { fullname, description, profession } = req.body;
  const { imageName: image } = req;
  await Client_say.findByIdAndUpdate(id, {
    $set: {
      image,
      fullname,
      description,
      profession,
    },
  });
  res.status(200).json({ message: "Updated" });
};

// delete Client_say

const deleted = async (req, res) => {
  const { id } = req.params;
  await Client_say.findByIdAndDelete(id);

  res.status(200).json({ message: "deleted" });
};

module.exports = { create, read, update, deleted, getOne };
