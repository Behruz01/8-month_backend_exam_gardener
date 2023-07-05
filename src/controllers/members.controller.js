const Members = require("../models/Members");
const Joi = require("joi");

// create Members

const create = async (req, res) => {
  const { fullname, profession, facebookLink, twitterLink, instagramLink } =
    req.body;
  const { imageName: imageLink } = req;

  const schema = Joi.object({
    fullname: Joi.string().required(),
    profession: Joi.string().required(),
    facebookLink: Joi.string(),
    twitterLink: Joi.string(),
    instagramLink: Joi.string(),
  });
  const { error } = schema.validate({
    fullname,
    profession,
    facebookLink,
    twitterLink,
    instagramLink,
  });
  if (error) {
    return res.status(403).json({ error: error.message });
  }

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
  // res.render("index", { members });
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
  const { fullname, profession, facebookLink, twitterLink, instagramLink } =
    req.body;

  const schema = Joi.object({
    fullname: Joi.string().required(),
    profession: Joi.string().required(),
    facebookLink: Joi.string(),
    twitterLink: Joi.string(),
    instagramLink: Joi.string(),
  });
  const { error } = schema.validate({
    fullname,
    profession,
    facebookLink,
    twitterLink,
    instagramLink,
  });
  if (error) {
    return res.status(403).json({ error: error.message });
  }

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
