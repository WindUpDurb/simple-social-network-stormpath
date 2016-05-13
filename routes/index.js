"use strict";

var express = require("express");
var router = express.Router();
var path = require("path");
var pathToIndex = path.join(__dirname, "../views/index.html");
var stormpath = require("express-stormpath");

router.get("/", stormpath.getUser, function (request, response) {
   response.sendFile(pathToIndex);
});

module.exports = router;