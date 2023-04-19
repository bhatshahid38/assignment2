const express = require("express");
const { signin } = require("../controller/loginController");
const { profile } = require("../controller/profilecontroller");
const router = express.Router();
router.post("/signin", signin);
router.get("/profile", profile);

module.exports = router;
