const isSuperAdmin = async (req, res, next) => {
  const { id } = req.user;
  if (id === "64a5b10b7d448aea36c3d0e8") {
    return next();
  }
  res.status(403).json({ message: "You are not super Admin!" });
};
module.exports = isSuperAdmin