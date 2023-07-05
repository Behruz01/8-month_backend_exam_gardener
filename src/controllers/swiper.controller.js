const Swiper = require("../models/Swiper");

// create swiper

const create = async (req, res) => {
  const { title, description } = req.body;
  const { imageName: imageLink } = req;

  Swiper.create({ imageLink, title, description });
  res.status(201).json({ message: "Created" });
};

// read

const read = async (req, res) => {
  const swipers = await Swiper.find();
  res.status(200).json({ message: "Ok", data: swipers });
};

// get One

const getOne = async (req, res) => {
  const { id } = req.params;
  const about = await Swiper.findById(id);
  res.status(200).json({ message: "Ok", data: about });
};

// update swiper

const update = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const { imageName: image } = req;
  await Swiper.findByIdAndUpdate(id, {
    $set: {
      image,
      title,
      description,
    },
  });
  res.status(200).json({ message: "Updated" });
};

// delete swiper

const deleted = async (req, res) => {
  const { id } = req.params;
  await Swiper.findByIdAndDelete(id);

  res.status(200).json({ message: "deleted" });
};

module.exports = { create, read, update, deleted, getOne };
