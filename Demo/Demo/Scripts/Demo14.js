/// <reference path="angular.min.js" />

var myApp = angular.module("myModule", [])
.controller("myController", function ($scope) {
    var employees = [
        { name: "Ben", gender: 1, city:'London', salary: 55000 },
        { name: "Sara", gender: 2, city: 'Chennai', salary: 65000 },
        { name: "Mark", gender: 1, city: 'Chicago', salary: 60000 },
        { name: "Pam", gender: 2, city: 'London', salary: 20000 },
        { name: "Todd", gender: 3, city: 'Chennai', salary: 70000 },
    ];

    $scope.employees = employees;
})