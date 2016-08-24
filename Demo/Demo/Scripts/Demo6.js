/// <reference path="angular.min.js" />

var myApp = angular.module("myModule", [])
.controller("myController", function ($scope) {
    $scope.contries = [
        {
        name: 'UK',
        cities:
                [
                    { name: 'London' },{ name: 'Manchester' },{ name: 'Birmingham' },
                ]
        },
        {
            name: 'USA',
            cities:
                    [
                        { name: 'Los Angles' }, { name: 'Chicago' }, { name: 'Houstan' },
                    ]
        },
        {
            name: 'India',
            cities:
                    [
                        { name: 'Hyderabad' }, { name: 'Chennai' }, { name: 'Mumbai' },
                    ]
        }
    ]
})