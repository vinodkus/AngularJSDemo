/// <reference path="angular.min.js" />
var myApp = angular.module("myModule", [])
.controller("myController", function ($scope) {
    var employees = [
        { name: "Ben", gender: 1, salary: 55000 },
        { name: "Sara", gender: 2, salary: 65000 },
        { name: "Mark", gender: 1, salary: 60000 },
        { name: "Pam", gender: 2, salary: 20000 },
        { name: "Todd", gender: 3, salary: 70000 },
    ];
    $scope.employees = employees;
})