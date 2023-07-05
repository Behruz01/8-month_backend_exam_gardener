const { Router } = require("express");
const fileUpload = require("../middlewares/fileUpload");
const {
  create,
  read,
  update,
  deleted,
  getOne,
} = require("../controllers/swiper.controller");
const isAuth = require("../middlewares/isAuth.middleware");
const { isAdmin } = require("../middlewares/isAdmin.middleware");

const router = Router();

router.post("/swiper", isAuth, isAdmin, fileUpload, create);
router.get("/swipers", read);
router.get("/swiper/:id", getOne);
router.put("/swiper/:id", isAuth, isAdmin, fileUpload, update);
router.delete("/swiper/:id", isAuth, isAdmin, deleted);

module.exports = router;
