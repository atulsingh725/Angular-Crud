/// <reference path="angular.js" />

//module method used to create a module
var app = angular.module("Application", []);

//To Create controller and at the same time register with module
app.controller("myController", function ($scope, $http) {
    $scope.btntext = "Save";
    $scope.showDiv = false;
    $scope.showPicDiv = false;

    $scope.files = [];

    //function call on change of file
    $scope.LoadFileData = function (files) {
        $scope.files = files;
    };

    $scope.SaveData = function () {

        var Name = document.getElementById("txtName");
        var Mobile = document.getElementById("phone");
        var File = document.getElementById("File");
        var StateId = document.getElementById("StateId");
        var CityId = document.getElementById("CityId");
        if (Name.value == "") {
            alert("Please Enter Name !!");
            Name.focus();
            return;
        }
        if (Mobile.value == "") {
            alert("Please Enter Mobile !!");
            Mobile.focus();
            return;
        }
        if (Mobile.value <10) {
            alert("Please Enter 10 Digit valid Mobile !!");
            Mobile.focus();
            return;
        }
        if ($scope.btntext == "Save") {
            if (File.value == "") {
                alert("Please Select Image !!");
                File.focus();
                return;
            }
        }

        if (StateId.value == "") {
            alert("Please Select State !!");
            StateId.focus();
            return;
        }
        if (CityId.value == "") {
            alert("Please Select City !!");
            CityId.focus();
            return;
        }
        
            $http({
                url: "/Home/SaveData",
                method: "POST",
                headers: { "Content-Type": undefined },
                transformRequest: function (data) {
                    var formData = new FormData();

                    formData.append("ID", $scope.ID);
                    formData.append("Name", $scope.Name);
                    formData.append("Mobile", $scope.Mobile);
                    formData.append("StateId", $scope.StateId);
                    formData.append("CityId", $scope.CityId);
                    formData.append("Action", $scope.btntext);

                    //for uploading single file
                    formData.append("files", $scope.files[0]);

                    // For uploading multiple files

                    //for (var i = 0; i < data.files.length; i++) {
                    //    formData.append("files[" + i + "]", data.files[i]);
                    //}
                    return formData;

                },




            }).then(function (res) {
                //console.log(res.data);
                alert(res.data);
                location.reload();
            })
                .catch(function (error) {
                    alert(error);
                });

            
    };



    $http.get('/Home/BindState').then(function (list) {
        //console.log(list);
        $scope.stateList = {};
        $scope.stateList = list.data;
        //console.log(list.data);
    }, function () {
        alert('failed')
    });

    

    $scope.BindCity = function () {
        //alert($scope.StateId)
        BindCities();
    }

    function BindCities() {
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
        console.log(list.data);
    }, function () {
        alert('failed');
    });

    $scope.DeleteData = function (id) {
        //alert(id)
        var con = confirm("Are You Sure You Want To Delete ??");
        if (con == true) {
            $http.post('/home/deletedata', { ID: id })
                .then(function (res) {
                    alert(res.data);
                    location.reload();
                }, function () {
                    alert("error");
                });
        }
    }

    $scope.EditData = function (ID, Name, Mobile, StateId, CityId,PicUrl) {
        //debugger;
        $scope.ID = ID;
        $scope.Name = Name;
        $scope.Mobile = Mobile;
        $scope.StateId = StateId.toString();
        BindCities();
        $scope.CityId = CityId.toString();
        $scope.btntext = "Update";
        $scope.showDiv = true;
        $scope.showPicDiv = true;
        $scope.imageUrl = PicUrl;
    }

   



});  // end of controller

function onlyAlphha(event) {
    if (event.which >= 48 && event.which <= 57) {
        event.preventDefault();
    };
};


