/// <reference path="angular.js" />
var demoApp = angular.module("demoApp", [])
.controller("countryController", function ($scope,$location,$anchorScroll, $http) {
    $http.get("/Service/CountryService.asmx/GetData")
    .then(function (response) {
        $scope.countries = response.data;
    });
    $scope.scrollTo = function (countryName) {
        $location.hash(countryName);
        $anchorScroll();
    }
})