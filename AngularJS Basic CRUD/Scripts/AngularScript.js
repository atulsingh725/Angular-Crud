/// <reference path="angular.js" />

//module method used to create a module
var app = angular.module("Application", []);

//To Create controller and at the same time register with module
app.controller("myController", function ($scope, $http) {
    $scope.btntext = "Save";
    $scope.showDiv = false;
    //Save Data with file

    $scope.SaveData = function () {
        var obj = {
            Name: $scope.Name,
            Mobile: $scope.Mobile,
            Pic: $scope.Pic
        };

        //var formData = new FormData();
        //formData.append('Pic', $scope.Pic);
        //formData.append('Name', $scope.Name);
        //formData.append('Mobile', $scope.Mobile);

        $http.post('/Home/SaveData', obj)
            .then(function (res) {
                //console.log(res.data);
                alert(res.data);
            })
            .catch(function (error) {
                alert(error);
            });
    }; //end of SaveData()

   // debugger;



    //Save data without file

    //$scope.SaveData = function () {
        
    //    if ($scope.btntext == "Save") {
    //        var obj = {
    //            Name: $scope.Name,
    //            Mobile: $scope.Mobile,
    //            StateId: $scope.StateId,
    //            CityId: $scope.CityId,
    //            Action: "Save"
    //        };
    //    }
    //    if ($scope.btntext == "Update") {
    //        var obj = {
    //            ID:$scope.ID,
    //            Name: $scope.Name,
    //            Mobile: $scope.Mobile,
    //            StateId: $scope.StateId,
    //            CityId: $scope.CityId,
    //            Action: "Update"
    //        };
    //    }
    //    
    //        $http.post('/Home/SaveData', obj)
    //            .then(function (res) {
    //                //console.log(res.data);
    //                alert(res.data);
    //                location.reload();
    //            })
    //            .catch(function (error) {
    //                alert(error);
    //            });
        
    //}; //end of SaveData()




    $http.get('/Home/BindState').then(function (list) {
        console.log(list);
        $scope.stateList = {};
        $scope.stateList = list.data;
        console.log(list.data);
    }, function () {
        alert('failed')
    });



    $scope.BindCity = function () {
        //alert($scope.StateId)
        var obj = {
            StateId: $scope.StateId
        }
        $http.post('/Home/BindCity', obj).then(function (list) {
            console.log(list);
            $scope.cityList = {};
            $scope.cityList = list.data;
            console.log(list.data);
        }, function () {
            alert('failed')
        });
    }

    $http.get('/Home/GetAllData').then(function (list) {
        
        $scope.EmpData = {};
        $scope.EmpData = list.data;
    }, function () {
        alert('failed');
    });

    $scope.DeleteData = function (id) {
        //alert(id)
        $http.post('/home/deletedata', { ID: id })
            .then(function (res) {
                alert(res.data);
                location.reload();
            }, function () {
                alert("error");
            });
    }

    $scope.EditData = function (ID, Name, Mobile, StateId, CityId) {
        //debugger;
        $scope.ID = ID;
        $scope.Name = Name;
        $scope.Mobile = Mobile;
        $scope.StateId = StateId;
        $scope.CityId = CityId;
        $scope.btntext = "Update";
        $scope.showDiv = true;
    }

});  // end of controller