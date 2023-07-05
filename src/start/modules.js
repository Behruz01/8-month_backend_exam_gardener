require("express-async-errors");
const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");
//import routes
const swiperRouter = require("../routes/swiper.route");
const quoteRouter = require("../routes/free_quote.route");
const projectRouter = require("../routes/project.route");
const memberRouter = require("../routes/members.route");
const clientRouter = require("../routes/client_say.route");
const adminRouter = require("../routes/admin.route");
const loginRouter = require("../routes/login.route");
//
const modules = (app) => {
  app.use(express.json());
  app.use(fileupload());
  app.use(express.static(process.cwd() + "/uploads"));
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  //   routes
  app.use("/api", swiperRouter);
  app.use("/api", quoteRouter);
  app.use("/api", projectRouter);
  app.use("/api", memberRouter);
  app.use("/api", clientRouter);
  app.use("/api", adminRouter);
  app.use("/auth", loginRouter);

  //   error handler
  app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
  });
};
module.exports = modules;
