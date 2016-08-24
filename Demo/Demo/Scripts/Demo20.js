/// <reference path="angular.js" />
var app = angular.module("myModule", [])
.controller("myController", function ($scope, stringService1, $log) {
    $scope.transformString = function(input)
    {
        $scope.output = stringService1.processString(input);
        $scope.upper = stringService1.ConvertUpper(input);
        $log.info(stringService1);
        debugger;
        
    }    
})