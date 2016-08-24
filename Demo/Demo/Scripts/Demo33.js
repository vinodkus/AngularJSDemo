/// <reference path="angular.min.js" />
/// <reference path="angular-route.min.js" />
var myApp = angular.module("Demo", [])
.controller("countryController", function () {
    this.name = "India";
})
.controller("stateController", function () {
    this.name = "Bihar";
})
.controller("cityController", function () {
    this.name = "Patna";
})