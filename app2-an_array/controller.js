angular
.module("app")
.controller("controller", function($scope, service){

  $scope.employees = service.myData;


});
