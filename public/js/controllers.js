"use strict";

var app = angular.module("socialNetworkApp");

app.controller("mainController", function () {
    console.log("Main Controller");
});


app.controller("profileController", function (ProfileServices, $scope, $user) {
    console.log("Profile Controller");

    $user.get()
        .then(function (user) {
            console.log("user: ", user);
            $scope.activeUser = user;
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });

    $scope.submitEdits = function () {
        var editsToSubmit = $scope.edits;
        ProfileServices.submitEdits(editsToSubmit)
            .then(function (response) {
                console.log("response: ", response);
            })
            .catch(function (error) {
                console.log("Error: ", error);
            })
    };    
    
});