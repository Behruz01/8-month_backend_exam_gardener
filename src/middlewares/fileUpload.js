const { v4: uuid } = require("uuid");
const path = require("path");

const fileupload = async (req, res, next) => {
  const image = req.files?.image;

  if (!image) return res.status(400).json({ message: "Image is required" });

  const extname = path.extname(image.name);

  const imageName = `${uuid()}${extname}`;

  image.mv(`${process.cwd()}/uploads/${imageName}`);

  req.imageName = imageName;
  next();
};

module.exports = fileupload;
