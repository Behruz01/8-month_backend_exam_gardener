const { Router } = require("express");
const fileUpload = require("../middlewares/fileUpload");
const {
  create,
  read,
  update,
  deleted,
  getOne,
} = require("../controllers/members.controller");
const isAuth = require("../middlewares/isAuth.middleware");
const { isAdmin } = require("../middlewares/isAdmin.middleware");

const router = Router();

router.post("/member", isAuth, isAdmin, fileUpload, create);
router.get("/members", read);
router.get("/member/:id", getOne);
router.put("/member/:id", isAuth, isAdmin, fileUpload, update);
router.delete("/member/:id", isAuth, isAdmin, deleted);

module.exports = router;
