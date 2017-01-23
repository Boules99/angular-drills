angular
.module("apiApp")
.controller("mainCtrl", function($scope, service){


service.getVehicles().then(function(response){
  console.log(response);
  $scope.vehicles = response.data.results;
})


});
