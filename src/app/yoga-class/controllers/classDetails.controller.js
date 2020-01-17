(function(){
  angular
    .module('YogaClassApp')
    .controller('ClassDetailsController', ClassDetailsController);

function ClassDetailsController($scope, $http,  $routeParams, YogaClassService) {
  var onClassDetails = function(data){
          $scope.classdetails = data[0];
          
  };
  var onError = function(reason){
          $scope.error = reason;
  };
  var classid = $routeParams.id;
  YogaClassService.classdetails(classid)
                  .then(onClassDetails, onError);

}
}());
