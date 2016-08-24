/// <reference path="angular.min.js" />
var myApp = angular.module("myModule", [])
.controller("myController", function ($scope) {
    var employees = [
        { name: 'Ajay', DOB: new Date("November 23, 1980"), gender: "Male", city: 'Delhi', salary: '10000' },
        { name: 'Sanjana', DOB: new Date("December 12, 1991"), gender: "Female", city: 'Kolkata', salary: '20000' },
        { name: 'Vijay', DOB: new Date("August 10, 1981"), gender: "Male", city: 'Patna', salary: '30000' },
        { name: 'Rani', DOB: new Date("January 8, 1994"), gender: "Female", city: 'Agra', salary: '40000' },
        { name: 'Mohan', DOB: new Date("March 1, 1982"), gender: "Male", city: 'Ranchi', salary: '50000' },
    ];
    $scope.employees = employees;
    $scope.search = function (item) {
        if ($scope.searchText == undefined) {
            debugger;
            return true;
        }
        else {
            if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
                ) {
                debugger;
                return true;
            }
        }
        return false;
    }
});