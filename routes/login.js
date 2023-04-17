const express = require("express");
const { signin } = require("../controller/loginController");
const router = express.Router();
router.post("/signin", signin);

module.exports = router;
