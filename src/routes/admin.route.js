const { Router } = require("express");
const fileUpload = require("../middlewares/fileUpload");
const {
  create,
  read,
  update,
  deleted,
  getOne,
} = require("../controllers/admin.controller");
// const isAuth = require("../middlewares/isAuth.middleware");

const router = Router();

router.post("/admin", create);
router.get("/admins", read);
router.get("/admin/:id", getOne);
router.put("/admin/:id", update);
router.delete("/admin/:id", deleted);

module.exports = router;
