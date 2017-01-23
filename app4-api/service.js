angular
.module("app")
.service("service", function($http){

var basicUrl = "http://pokeapi.co/api/v2/"

this.getPokemans = function() {
  return $http({
    method: "GET",
    url: basicUrl + "pokemon/"
  });
}

});
