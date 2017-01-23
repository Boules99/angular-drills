angular
.module("app")
.controller("mainCtrl", function($scope, service){

$scope.employees = service.myData;

});
