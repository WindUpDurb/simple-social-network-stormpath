"use strict";

var express = require("express");
var router = express.Router();
var stormpath = require("express-stormpath");

router.route("/")
    .put(stormpath.loginRequired, function (request, response) {

        for (var key in request.body) {
            request.user[key] = request.body[key];
        }

        request.user.save(function (error, savedUser) {
            if (error) response.status(400).send(error);
            response.send(savedUser);
        });
    })
    .post(function (request, response) {
    console.log("Here")
    response.send("stuff")
/*    request.user.customData[request.body.customKey] = request.body.customValue;
    request.user.customData.save(function (error, savedUser) {
        if (error) response.status(400).send(error);
        response.send(savedUser)
    })*/
    })
    .get(function (request, response) {
        response.send("H")
    })

module.exports = router;