/// <reference path="angular.min.js" />

var myApp = angular.module("myModule", []);
var myController = function ($scope)
{
    $scope.message = "Vinod Kumar";
}

myApp.controller("myController", myController);