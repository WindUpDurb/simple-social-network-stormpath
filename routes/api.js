"use strict";

var express = require("express");
var router = express.Router();

//router.use("/users", require("./users"));
router.use("user", require("./user"));


module.exports = router;