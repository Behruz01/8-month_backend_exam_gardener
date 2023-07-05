const { Router } = require("express");
const fileUpload = require("../middlewares/fileUpload");
const {
  create,
  read,
  update,
  deleted,
  getOne,
} = require("../controllers/admin.controller");
const isAuth = require("../middlewares/isAuth.middleware");
const isSuperAdmin = require("../middlewares/isSuperAdmin.middleware");

const router = Router();

router.post("/admin", isAuth, isSuperAdmin, create);
router.get("/admins", isAuth, isSuperAdmin, read);
router.get("/admin/:id", isAuth, isSuperAdmin, getOne);
router.put("/admin/:id", isAuth, isSuperAdmin, update);
router.delete("/admin/:id", isAuth, isSuperAdmin, deleted);

module.exports = router;
