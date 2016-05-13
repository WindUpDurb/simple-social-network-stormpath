/*

"use strict";

var express = require("express");

var stormpath = require("express-stormpath");

var apiKey = new stormpath.ApiKey(
  process.env.STORMPATH_CLIENT_APIKEY_ID,
  process.env.STORMPATH_CLIENT_APIKEY_SECRET
);

var Client = new stormpath.Client({ apiKey : apiKey});

var applicationHref = process.env.STORMPATH_APPLICATION_HREF;

Client.getApplication(applicationHref, function (error, application) {
    console.log("Application: ", application);
});

module.exports = Client;
*/
