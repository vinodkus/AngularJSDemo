/// <reference path="angular.min.js" />
var myApp = angular.module("myModule", [])
.controller("myController", function ($scope) {
    var employees = [
        { name: 'Ajay', DOB: new Date("November 23, 1980"), gender: "Male", salary: 55000.788 },
        { name: 'Sanjana', DOB: new Date("December 12, 1991"), gender: "Female", salary: 68000 },
        { name: 'Vijay', DOB: new Date("August 10, 1981"), gender: "Male", salary: 57000 },
        { name: 'Rani', DOB: new Date("January 8, 1994"), gender: "Female", salary: 53000 },
        { name: 'Mohan', DOB: new Date("March 1, 1982"), gender: "Male", salary: 60000 }
    ];
    $scope.employees = employees;
    $scope.sortColumn = 'name';
});