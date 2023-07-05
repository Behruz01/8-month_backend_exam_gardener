const { Router } = require("express");
const fileUpload = require("../middlewares/fileUpload");
const {
  create,
  read,
  update,
  deleted,
  getOne,
  complate,
  complateProjects,
  ongoingProjects,
  countView,
} = require("../controllers/project.controller");
// const isAuth = require("../middlewares/isAuth.middleware");

const router = Router();

router.post("/project", fileUpload, create);
router.get("/projects", read);
router.get("/project/:id", getOne);
router.put("/project/:id", fileUpload, update);
router.delete("/project/:id", deleted);
router.put("/project/iscomplater/:id", complate);
router.get("/complateProjects", complateProjects);
router.get("/ongoingProjects", ongoingProjects);
router.post("/view/:id", countView);

module.exports = router;
