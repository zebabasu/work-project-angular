(function(){
  angular
    .module('YogaClassApp')
    .controller('ClassDetailsController', ClassDetailsController);

function ClassDetailsController($scope, YogaClassService, $routeParams) {

  var onClassDetails = function(data){
          $scope.classdetails = data;
  };
  var onError = function(reason){
          $scope.error = reason;
  };
  var classId = $routeParams.id;
  YogaClassService.classdetails(classId)
                  .then(onClassDetails, onError);
}

}());
