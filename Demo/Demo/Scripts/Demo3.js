/// <reference path="angular.min.js" />
var myApp = angular.module("myModule", [])
.controller("myController", function ($scope) {
    var employee = {
        firstName: "Vinod",
        lastName: "Kumar",
        gender: "Male"
    };
    $scope.employee = employee;
});


