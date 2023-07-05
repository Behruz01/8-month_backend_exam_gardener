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
const isAuth = require("../middlewares/isAuth.middleware");
const { isAdmin } = require("../middlewares/isAdmin.middleware");

const router = Router();

router.post("/quote", isAuth, isAdmin, create);
router.get("/quotes", read);
router.get("/quote/:id", getOne);
router.put("/quote/:id", isAuth, isAdmin, update);
router.delete("/quote/:id", isAuth, isAdmin, deleted);
router.put("/quote/iscomplate/:id", isAuth, isAdmin, complate);

module.exports = router;
