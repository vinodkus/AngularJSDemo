/// <reference path="angular.min.js" />

var myApp = angular.module("myModule", [])
.controller("myController", function ($scope) {
    var technologies = [
        { name: 'C#', likes: 0, dislikes: 0 },
        { name: 'ASP.NET', likes: 0, dislikes: 0 },
        { name: 'JavaScript', likes: 0, dislikes: 0 },
        { name: 'AngularJS', likes: 0, dislikes: 0 },
    ];
    $scope.technologies=technologies;
    $scope.incrementLikes = function (technology) {
        technology.likes++;
    };
    $scope.incrementDisLikes = function (technology) {
        technology.dislikes++;
    }
});