angular
.module("arrayApp")
.controller("arrayController", function($scope, service){


$scope.employees = service.myData;

});
