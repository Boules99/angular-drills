angular
.module("app")
.controller("mainCtrl", function($scope, service){

  $scope.myData = service.myData;


});
