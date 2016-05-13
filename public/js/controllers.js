"use strict";

var app = angular.module("socialNetworkApp");

app.controller("mainController", function () {
    console.log("Main Controller");
});


app.controller("profileController", function ($scope, $user, $http) {
    console.log("Profile Controller");

    $user.get()
        .then(function (user) {
            console.log("user: ", user);
            $scope.activeUser = user;
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });



});