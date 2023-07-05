const { Router } = require("express");
const fileUpload = require("../middlewares/fileUpload");
const {
  create,
  read,
  update,
  deleted,
  getOne,
  complate,
} = require("../controllers/free_quote.controller");
// const isAuth = require("../middlewares/isAuth.middleware");

const router = Router();

router.post("/quote", create);
router.get("/quotes", read);
router.get("/quote/:id", getOne);
router.put("/quote/:id", update);
router.delete("/quote/:id", deleted);
router.put("/quote/iscomplate/:id", complate);

module.exports = router;
