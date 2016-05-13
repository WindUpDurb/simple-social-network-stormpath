"use strict";

var express = require("express");
var router = express.Router();
var stormpath = require("express-stormpath");

router.route("/me")
    .put(stormpath.loginRequired, function (request, response) {

        for (var key in request.body) {
            request.user[key] = request.body[key];
        }

        request.user.save(function (error, savedUser) {
            if (error) response.status(400).send(error);
            response.send(savedUser);
        });
    })


module.exports = router;