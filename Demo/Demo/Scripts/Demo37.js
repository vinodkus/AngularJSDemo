/// <reference path="angular.min.js" />
var myApp = angular.module("Demo", [])
.controller("redColourController", function ($scope, $rootScope) {
    $scope.redColour = "I am red Colour";
    $rootScope.rootScopeColour = "I am root scope Colour";
})
.controller("greenColourController", function ($scope, $rootScope) {
    $scope.greenColour = "I am green Colour";
    $rootScope.rootScopeColour = "I am root scope Colour";
})