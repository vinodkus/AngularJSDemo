/// <reference path="angular.min.js" />
/// <reference path="angular-route.min.js" />


var myApp = angular.module("Demo", ["ui.router"])
.config(function ($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider) {
    $urlMatcherFactoryProvider.caseInsensitive(true);
    $urlRouterProvider.otherwise("/home")
    $stateProvider
    .state("home", {
        url:"/home",
        templateUrl: "/Templates/home.html",
        //template: "<h1>HOME TEMPLATE</h1>",
        controller: "homeController",
        controllerAs: "homeCtrl",
        data: {
            customData1: "Home State Custom Data 1",
            customData2: "Home State Custom Data 2"
        }
    })
    .state("courses", {
        url: "/courses",
        templateUrl: "/Templates/courses.html",
        controller: "coursesController",
        controllerAs: "courseCtrl",
        data: {
        customData1: "Courses State Custom Data 1",
        customData2: "Courses State Custom Data 2"
    }
    })
    .state("studentParent", {
        url: "/studentsU",
        controller: "studentParentController",
        controllerAs: "stdParentCtrl",
        templateUrl: "/Templates/studentParent.html",
        resolve: {
            studentTotals: function ($http) {
                return $http.get("/Service/StudentService.asmx/GetStudentTotals")
                .then(function (response) {
                    return response.data;
                })
            }
        },
        abstract:true
    })
    .state("studentParent.students", {
        url: "/",
        views: {
            "studentData": {
                templateUrl: "/Templates/studentsU.html",
                controller: "studentsController as studentsCtrl",
                resolve: {
                    studentslist: function ($http) {
                        return $http.get("/Service/StudentService.asmx/GetAllStudents")
                                    .then(function (response) {
                                        return response.data;
                                    })
                    }
                }
            },
            "totalData": {
                templateUrl: "/Templates/studentsTotal.html",
                controller: "studentsTotalController",
                controllerAs:"studentsTotalCtrl"
            }
        }
    })
    .state("studentParent.studentDetails", {
        url: "/:id",
        views:{
            "studentData":{
                templateUrl: "/Templates/studentDetailsU.html",
                controller: "studentDetailsController as studentDetailsCtrl"
            }
        }        
    })
    .state("studentsSearch", {
        url: "/studentsSearch/:name",
        templateUrl: "Templates/studentsSearchU.html",
        controller: "studentsSearchController",
        controllerAs: "studentsSearchCtrl"

    })
    //.otherwise({
    //    redirectTo: "/home"
    //})
    $locationProvider.html5Mode(true);
})
.controller("homeController", function ($state) {
    this.message = "Home Page";
    this.HomeStateCustomData1 = $state.current.data.customData1;
    this.HomeStateCustomData2 = $state.current.data.customData2;

    this.CoursesStateCustomData1 = $state.get("courses").data.customData1;
    this.CoursesStateCustomData2 = $state.get("courses").data.customData2;

})
.controller("coursesController", function () {
    this.courses = ["C#", "ASP.NET", "JS", "SQL Server"]
})
.controller("studentsController", function (studentslist, $state, $location, studentTotals) {
    var vm = this;

    vm.studentSearch = function () {
        $state.go("studentsSearch", { name: vm.name });
    }

    vm.reloadData = function () {
        $state.reload();
    }
    vm.students = studentslist;
    vm.studentTotals = studentTotals;
    //$http.get("/Service/StudentService.asmx/GetAllStudents")
    //            .then(function (response) {
    //                vm.students = response.data;
    //            })
})
.controller("studentDetailsController", function ($http, $stateParams) {
    var vm = this;
    $http.get("/Service/StudentService.asmx/GetStudent?id=" + $stateParams.id).then(function (response) {
        vm.student = response.data;
    })
})    
.controller("studentsTotalController", function (studentTotals) {
        this.total = studentTotals.total;
})
.controller("studentParentController", function (studentTotals) {
    this.males = studentTotals.males;
    this.females = studentTotals.females;
    this.total = studentTotals.total;
})
//.controller("studentDetailsController", function ($scope, $http, $routeParams) {
//    var vm = this;
//    $http({
//        method: "GET",
//        url: "/Service/StudentService.asmx/GetStudent",
//        params: { id: $routeParams.id }
//    }).then(function (response) {
//        vm.student = response.data;
//    })
//})
.controller("studentsSearchController", function ($http, $stateParams) {
    var vm = this;

    if ($stateParams.name) {
        $http({
            url: "/Service/StudentService.asmx/GetStudentsByName",
            method: "get",
            params: { name: $stateParams.name }
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