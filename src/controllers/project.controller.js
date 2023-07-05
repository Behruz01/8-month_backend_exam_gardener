const Project = require("../models/Project");

// create Project

const create = async (req, res) => {
  const { title } = req.body;
  const { imageName: imageLink } = req;

  Project.create({ imageLink, title });
  res.status(201).json({ message: "Created" });
};

// read

const read = async (req, res) => {
  const projects = await Project.find();
  res.status(200).json({ message: "Ok", data: projects });
};

// get One

const getOne = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  res.status(200).json({ message: "Ok", data: project });
};

// update Project

const update = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const { imageName: image } = req;
  await Project.findByIdAndUpdate(id, {
    $set: {
      image,
      title,
    },
  });
  res.status(200).json({ message: "Updated" });
};

// delete Project

const deleted = async (req, res) => {
  const { id } = req.params;
  await Project.findByIdAndDelete(id);

  res.status(200).json({ message: "deleted" });
};

// complate

const complate = async (req, res) => {
  const { id } = req.params;
  const findProject = await Project.findById(id);
  const isCompleted = !findProject.isComplated;
  await Project.findByIdAndUpdate(id, {
    $set: {
      isComplated: isCompleted,
    },
  });

  res.status(201).json({ message: "Success" });
};

// category for complate

const complateProjects = async (req, res) => {
  const data = await Project.find({ isComplated: true });
  res.status(200).json(data);
};

const ongoingProjects = async (req, res) => {
  const data = await Project.find({ isComplated: false });
  res.status(200).json(data);
};

// count users

const countUsers = async (req, res) => {
  const usersCount = await Project.countDocuments();
  res.status(200).json({ message: "Ok", data: usersCount });
};

module.exports = {
  create,
  read,
  update,
  deleted,
  getOne,
  complate,
  complateProjects,
  ongoingProjects,
  countUsers,
};
