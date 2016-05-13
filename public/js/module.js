"use strict";

var app = angular.module("socialNetworkApp", ["ui.router", "stormpath", "stormpath.templates"]);

app.run(function($stormpath) {
    $stormpath.uiRouter({
        loginState : "login",
        defaultPostLoginState : "home"
    });
});

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("home", {
            url : "/",
            views : {
                "body" : {
                    templateUrl : "/html/home.html",
                    controller : "homeController"
                }
            }
        })
        .state("login", {
            url : "/login",
            views : {
                "notActiveBody" : {
                    templateUrl : "/html/login.html"
                }
            }
        })
        .state("register", {
            url : "/register",
            views : {
                "notActiveBody" : {
                    templateUrl : "/html/register.html"
                }
            }
        })
        .state("profile", {
            url : "/profile",
            views : {
                "body" : {
                    templateUrl : "/html/profile.html",
                    controller : "profileController"
                }
            }
        })
        .state("editProfile", {
            url : "/editProfile",
            views : {
                "body" : {
                    templateUrl : "/html/editProfile.html",
                    controller : "profileController"
                }
            }
        })


    $urlRouterProvider.otherwise("/");
});