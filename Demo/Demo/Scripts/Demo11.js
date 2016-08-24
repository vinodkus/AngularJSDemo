/// <reference path="angular.min.js" />
var myApp = angular.module("myModule", [])
.controller("myController", function ($scope) {
    var employees = [
        { name: 'Ajay', DOB: new Date("November 23, 1980"), gender: "Male", city: 'Delhi'},
        { name: 'Sanjana', DOB: new Date("December 12, 1991"), gender: "Female", city: 'Kolkata' },
        { name: 'Vijay', DOB: new Date("August 10, 1981"), gender: "Male", city: 'Patna' },
        { name: 'Rani', DOB: new Date("January 8, 1994"), gender: "Female", city: 'Agra' },
        { name: 'Mohan', DOB: new Date("March 1, 1982"), gender: "Male", city: 'Ranchi' }
    ];
    $scope.employees = employees;    
});