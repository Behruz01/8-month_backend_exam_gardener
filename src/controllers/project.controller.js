const Project = require("../models/Project");
const Joi = require("joi");

// create Project

const create = async (req, res) => {
  const { title } = req.body;
  const { imageName: imageLink } = req;

  //VALIDATION
  const schema = Joi.object({
    title: Joi.string().required(),
  });
  const { error } = schema.validate({ title });
  if (error) {
    return res.status(403).json({ error: error.message });
  }

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

  //VALIDATION
  const schema = Joi.object({
    title: Joi.string().required(),
  });
  const { error } = schema.validate({ title });
  if (error) {
    return res.status(403).json({ error: error.message });
  }

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

// count views

const countView = async (req, res) => {
  const { id } = req.params;
  const findProject = await Project.findById(id);
  const count = findProject.viewCount;

  const currentDate = new Date();
  const lastThirtyDays = new Date(
    currentDate.setDate(currentDate.getDate() - 30)
  );

  //countni update qilish va sanani saqlash

  await Project.findByIdAndUpdate(
    id,
    {
      $set: {
        viewCount: count + 1,
        lastViewed: new Date(),
        viewDates: [
          new Date(),
          ...findProject.viewDates.filter((date) => date > lastThirtyDays),
        ],
      },
    },
    { runValidators: true }
  );

  res.status(200).json({ message: "Ok" });
};

// clipboardy

// const clipboardy = require("clipboardy");
// const clipboardData = clipboardy.readSync();
// console.log("Clipboarddan olingan ma'lumot:", clipboardData);

module.exports = {
  create,
  read,
  update,
  deleted,
  getOne,
  complate,
  complateProjects,
  ongoingProjects,
  countView,
};
