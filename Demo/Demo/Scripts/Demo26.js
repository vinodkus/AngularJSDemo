/// <reference path="angular.min.js" />
/// <reference path="angular-route.min.js" />

var myApp = angular.module("Demo", ["ngRoute"])
.config(function ($routeProvider, $locationProvider) {
    $routeProvider.caseInsensitiveMatch = true;
    $routeProvider
    .when("/HTML/home", {
        //templateUrl: "/Templates/home.html",
        template: "<h1>HOME TEMPLATE</h1>",
        controller: "homeController",
        controllerAs: "homeCtrl"
    })
    .when("/HTML/courses", {
        templateUrl: "/Templates/courses.html",
        controller: "coursesController",
        controllerAs: "courseCtrl"
    })
    .when("/HTML/students", {
        templateUrl: "/Templates/students.html",
        controller: "studentsController as studentsCtrl",
        resolve: {
            studentslist: function ($http) {
                return $http.get("/Service/StudentService.asmx/GetAllStudents")
                            .then(function (response) {
                                return response.data;
                            })
            }
        }
        
    })
    .when("/HTML/students/:id", {
            templateUrl: "/Templates/studentDetails.html",
            controller: "studentDetailsController as studentDetailsCtrl"
    })
    .when("/HTML/studentsSearch/:name?", {
        templateUrl: "Templates/studentsSearch.html",
        controller: "studentsSearchController",
        controllerAs: "studentsSearchCtrl"

    })
    .otherwise({
                redirectTo: "/HTML/home"
    })    
    $locationProvider.html5Mode(true);
})
.controller("homeController", function () {
    this.message = "Home Page";
})
.controller("coursesController", function () {
    this.courses=["C#","ASP.NET","JS","SQL Server"]
})
.controller("studentsController", function (studentslist, $route, $location) {
    var vm = this;

    vm.studentSearch = function () {
        debugger;
        if (vm.name)
            $location.url("/HTML/studentsSearch/" + vm.name)
        else
            $location.url("/HTML/studentsSearch")
    }

    vm.reloadData = function () {
        $route.reload();
    }
    vm.students = studentslist;
    //$http.get("/Service/StudentService.asmx/GetAllStudents")
    //            .then(function (response) {
    //                vm.students = response.data;
    //            })
})
//.controller("studentDetailsController", function ($http, $routeParams) {
//    var vm = this;
//    $http.get("/Service/StudentService.asmx/GetStudent?id=" + $routeParams.id).then(function (response) {
//        vm.student = response.data;
//    })
//})
.controller("studentDetailsController", function ($scope, $http, $routeParams) {
        var vm = this;
    $http({        
        method: "GET",
        url: "/Service/StudentService.asmx/GetStudent",
        params:{id:$routeParams.id}
    }).then(function (response) {        
        vm.student = response.data;
    })
})
.controller("studentsSearchController", function ($http, $routeParams) {
    var vm = this;

    if ($routeParams.name) {
        $http({
            url: "/Service/StudentService.asmx/GetStudentsByName",
            method: "get",
            params: { name: $routeParams.name }
        }).then(function (response) {
            vm.students = response.data;
        })
    }
    else {
        $http.get("/Service/StudentService.asmx/GetAllStudents")
                    .then(function (response) {
                        vm.students = response.data;
                    })
    }
})