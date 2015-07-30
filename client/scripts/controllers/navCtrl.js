var app = angular.module('app');

app.controller('navCtrl', function($scope, $location, $auth){
  $scope.init = function(){
    $scope.navList = [
      {name: "Menus", href:"#/menus"},
      {name: "Meals", href: "#/meals"},
      {name: "Ingredients", href: "#/ingredients"},
      {name: "About", href: "#/about"}
    ];
  };
  $scope.isActive = function(item) {
    return "#" + $location.$$url === item.href;
  };
  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };
});
