angular
.module("app")
.controller("soControlling", function($scope, service){

  $scope.employees = service.myData;

});
