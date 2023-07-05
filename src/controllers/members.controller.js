const Members = require("../models/Members");

// create Members

const create = async (req, res) => {
  const {
    fullname,
    profession,
    facebookLink,
    twitterLink,
    instagramLink,
  } = req.body;
  const { imageName: imageLink } = req;

  Members.create({
    imageLink,
    fullname,
    profession,
    facebookLink,
    twitterLink,
    instagramLink,
  });
  res.status(201).json({ message: "Created" });
};

// read

const read = async (req, res) => {
  const members = await Members.find();
  res.status(200).json({ message: "Ok", data: members });
};

// get One

const getOne = async (req, res) => {
  const { id } = req.params;
  const member = await Members.findById(id);
  res.status(200).json({ message: "Ok", data: member });
};

// update Members

const update = async (req, res) => {
  const { id } = req.params;
  const {
    fullname,
    profession,
    facebookLink,
    twitterLink,
    instagramLink,
  } = req.body;
  const { imageName: image } = req;
  await Members.findByIdAndUpdate(id, {
    $set: {
      image,
      fullname,
      profession,
      facebookLink,
      twitterLink,
      instagramLink,
    },
  });
  res.status(200).json({ message: "Updated" });
};

// delete Members

const deleted = async (req, res) => {
  const { id } = req.params;
  await Members.findByIdAndDelete(id);

  res.status(200).json({ message: "deleted" });
};

module.exports = { create, read, update, deleted, getOne };
