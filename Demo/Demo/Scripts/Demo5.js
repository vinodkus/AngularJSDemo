/// <reference path="angular.min.js" />
var myApp = angular.module("myModule", [])
.controller("myController", function ($scope) {
    $scope.message = "Vinod Kumar"
    $scope.employee = {
        firstName: 'Vinod',
        lastName: 'Kumar',
        gender:'Male'
    }
});