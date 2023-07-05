const { Router } = require("express");
const fileUpload = require("../middlewares/fileUpload");
const {
  create,
  read,
  update,
  deleted,
  getOne,
} = require("../controllers/clientSay.controller");
// const isAuth = require("../middlewares/isAuth.middleware");

const router = Router();

router.post("/client_say", fileUpload, create);
router.get("/client_says", read);
router.get("/client_say/:id", getOne);
router.put("/client_say/:id", fileUpload, update);
router.delete("/client_say/:id", deleted);

module.exports = router;
