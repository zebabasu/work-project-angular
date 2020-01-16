(function(){
  angular
    .module('YogaClassApp')
    .controller('MainController', MainController);

function MainController($scope, $interval, $location) {

  $scope.goto = function(page) {
      $location.path(page);
  };

      }
}());
