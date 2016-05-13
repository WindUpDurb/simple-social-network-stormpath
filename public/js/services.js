"use strict";

var app = angular.module("socialNetworkApp");

app.service("ProfileServices", function ($http) {

    this.submitEdits = function (edits) {
        return $http.post("/api/user/me", edits)
    }

});
