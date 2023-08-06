/// <reference path="angular.js" />


var app = angular.module("ProjectApp", []);

app.controller("ProjectController", function ($scope, $http) {
    $scope.btntext="Save"
    $http.get('/Home/BindEmployee').then(function (List) {
        $scope.EmpList = {};
        $scope.EmpList = List.data;
        //console.log(List.data);
        //console.log(List.data[0].Name);
    },
        function () {
            alert("Something Wrong");
    });

    $http.get('/Home/GetAllProject').then(function (List) {
        $scope.ProjectList = {};
        $scope.ProjectList = List.data;
        //console.log(List.data);
        //console.log(List.data[0].Name);
    },
        function () {
            alert("Something Wrong");
        });
    $scope.SaveData = function () {

        var EmpId = document.getElementById("EmpId");
        var Project = document.getElementById("Project");
        if (EmpId.value == "") {
            alert("Please Select Employee !!");
            EmpId.focus();
            return;
        }
        if (Project.value == "") {
            alert("Please Enter Project Name !!");
            EmpId.focus();
            return;
        }

        var obj = {
            EmpId: $scope.EmpId,
            Project: $scope.Project
        }

        $http.post('/Home/SaveProject', obj).then(function (res) {
            alert(res.data);
            location.reload();
        }).catc(function () {
            alert("Something Went Wrong");
        });
    }

    $scope.DeleteData = function (id) {

        var con = confirm("Are You Sure You Want To Delete ??");
        if (confirm==true) {
            $http.post('/Home/DeleteProject', { ID: id }).then(function (res) {
                alert(res.data);
                location.reload();
            });
        }

        
    }

    

});