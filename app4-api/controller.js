angular
.module("app")
.controller("mainCtrl", function($scope, service){


  service.getPokemans().then(function(response){
      //console.log(response.data.results);
      $scope.pokemans = response.data.results;
  })




});
