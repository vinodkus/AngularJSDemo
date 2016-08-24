/// <reference path="angular.min.js" />
var myApp = angular.module("myModule", [])
.controller("myController", function ($scope) {
    $scope.country = {
        name: 'USA',
        capital: 'Washington',
        flag:'/Images/usa-flag.jpg'
    }
});