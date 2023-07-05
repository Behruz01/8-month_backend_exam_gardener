const { Router } = require("express");
const fileUpload = require("../middlewares/fileUpload");
const { login } = require("../controllers/login.controller");

const router = Router();

router.post("/login", login);

module.exports = router;
