const express = require("express");
const { home } = require("../controller/homeController");
const { dashboard,login } = require("../controller/adminController");
const router = express.Router();

router.get("/", home);
router.get("/tekstilevimdashboard",dashboard)
router.get("/tekstilevimlogin",login)

module.exports = router;