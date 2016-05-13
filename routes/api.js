"use strict";

var express = require("express");
var router = express.Router();

//router.use("/users", require("./users"));
router.use("user", require("./user"));

router.get(function (request, response) {
    response.send("Yeah")
})

module.exports = router;