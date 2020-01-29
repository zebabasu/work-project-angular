(function(){
  angular
    .module('YogaClassApp')
    .controller('ClassDetailsController', ClassDetailsController);

function ClassDetailsController($scope, $http, $routeParams, $location, YogaClassService) {
  var onClassDetails = function(data){
          $scope.classdetails = data;


  };
  $scope.editClass = function(path, classId) {
            $location.path('/'+path+'/'+classId);
  };
  var onError = function(reason){
          $scope.error = reason;
  };
  var classid = $routeParams.id;

  YogaClassService.classdetails(classid)
                  .then(onClassDetails, onError);

}
}());
