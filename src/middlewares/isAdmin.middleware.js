const Admin = require("../models/Admin");

const isAdmin = async (req, res, next) => {
  const { id } = req.user;
  const findAdmin = Admin.findById(id);

  if (!findAdmin)
    return res.status(403).json({ message: "You are not Admin!" });

  next();
};
module.exports = { isAdmin };
