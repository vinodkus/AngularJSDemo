/// <reference path="angular.min.js" />

var app = angular.module("myModule", [])
.controller("myController", function ($scope) {
    var employees=[
        {name: "Ben",gender: "Male",salary:55000},
        {name: "Saram",gender: "Female",salary: 68000},
        { name: "Mark", gender: "Male", salary: 57000 },
        { name: "Pam", gender: "Female", salary: 53000 },
        { name: "Todd", gender: "Male", salary: 50000 },
    ];

    $scope.employees = employees;
    $scope.employeeView = "/HTML/EmployeeTable.html";
})