angular.module("routing").controller("mainCtrl", function($scope, mainService) {

  $scope.signin = function(user) {
    alert('hey, ' + user.username + ', ' + user.password + 'is very unsecure password');
    $state.go(details)
  }

  var getPlanets = function() {
    mainService.getPlanets().then(function(response) {
      $scope.planets = response.data.results;
    })
  }

  getPlanets();

});
