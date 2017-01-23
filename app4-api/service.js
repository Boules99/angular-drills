angular
.module("apiApp")
.service("service", function($http){

var URL = "http://swapi.co/api/"




this.getVehicles = function() {
  return $http({
    method: "GET",
    url: URL + "vehicles/"
  })
}


// this.randomizer = function() {
//   var randomNumber = Math.floor((Math.random() * 38) + 2);
//   console.log(randomNumber);
//   return randomNumber;
// }

});
