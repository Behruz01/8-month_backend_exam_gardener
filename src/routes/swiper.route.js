const { Router } = require("express");
const fileUpload = require("../middlewares/fileUpload");
const {
  create,
  read,
  update,
  deleted,
  getOne,
} = require("../controllers/swiper.controller");
// const isAuth = require("../middlewares/isAuth.middleware");

const router = Router();

router.post("/swiper", fileUpload, create);
router.get("/swipers", read);
router.get("/swiper/:id", getOne);
router.put("/swiper/:id", fileUpload, update);
router.delete("/swiper/:id", deleted);

module.exports = router;
