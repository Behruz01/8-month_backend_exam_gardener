const { Router } = require("express");
const fileUpload = require("../middlewares/fileUpload");
const {
  create,
  read,
  update,
  deleted,
  getOne,
} = require("../controllers/members.controller");
// const isAuth = require("../middlewares/isAuth.middleware");

const router = Router();

router.post("/member", fileUpload, create);
router.get("/members", read);
router.get("/member/:id", getOne);
router.put("/member/:id", fileUpload, update);
router.delete("/member/:id", deleted);

module.exports = router;
