"use strict";

require("dotenv").config();

const PORT = process.env.PORT || 3000;

var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var path = require("path");
var pathToStatic = path.join(__dirname, "public");
var stormpath = require("express-stormpath");

var mongoose = require("mongoose");

var app = express();

app.use(stormpath.init(app, {
    web : {
        spa : {
            enabled : true,
            view : path.join(__dirname, "views", "index.html")
        }
    }
}));


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.static(pathToStatic));

app.use("/", require("./routes/index"));
app.use("/api", require("./routes/api"));

app.on("stormpath.ready", function () {
    app.listen(PORT, function (error) {
        console.log(error || `Server listening on port ${PORT}`);
    });
});


module.exports = app;
