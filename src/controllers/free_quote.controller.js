const Free_Quote = require("../models/Free_Quote");
const Joi = require("joi");

// create quote

const create = async (req, res) => {
  const { name, email, mobile, service_type, message } = req.body;

  //VALIDATION
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    mobile: Joi.string().alphanum().required(),
    service_type: Joi.string().required(),
    message: Joi.string().required(),
  });
  const { error } = schema.validate({
    name,
    email,
    mobile,
    service_type,
    message,
  });
  if (error) {
    return res.status(403).json({ error: error.message });
  }

  Free_Quote.create({
    name,
    email,
    mobile,
    service_type,
    message,
    isCompleted,
  });
  res.status(201).json({ message: "Created" });
};

// read

const read = async (req, res) => {
  const quotes = await Free_Quote.find();
  res.status(200).json({ message: "Ok", data: quotes });
};

// get One

const getOne = async (req, res) => {
  const { id } = req.params;
  const quote = await Free_Quote.findById(id);
  res.status(200).json({ message: "Ok", data: quote });
};

// update quote

const update = async (req, res) => {
  const { id } = req.params;
  const { name, email, mobile, service_type, message } = req.body;

  //VALIDATION
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    mobile: Joi.string().alphanum().required(),
    service_type: Joi.string().required(),
    message: Joi.string().required(),
  });
  const { error } = schema.validate({
    name,
    email,
    mobile,
    service_type,
    message,
  });
  if (error) {
    return res.status(403).json({ error: error.message });
  }

  await Free_Quote.findByIdAndUpdate(id, {
    $set: {
      name,
      email,
      mobile,
      service_type,
      message,
    },
  });
  res.status(200).json({ message: "Updated" });
};

// delete quote

const deleted = async (req, res) => {
  const { id } = req.params;
  await Free_Quote.findByIdAndDelete(id);

  res.status(200).json({ message: "deleted" });
};

// complate

const complate = async (req, res) => {
  const { id } = req.params;
  const findQuote = await Free_Quote.findById(id);
  const isCompleted = !findQuote.isCompleted;

  await Free_Quote.findByIdAndUpdate(id, {
    $set: {
      isCompleted: isCompleted,
    },
  });
  res.status(201).json({ message: "Success" });
};
module.exports = { create, read, update, deleted, getOne, complate };
