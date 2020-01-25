(function(){
  angular
    .module('YogaClassApp')
    .controller('YogaPoseController', YogaPoseController);

function YogaPoseController($scope, YogaClassService) {

  var onPoseList = function(data){
          $scope.poseList = data;
  };
  var onError = function(reason){
          $scope.error = reason;
  };
  YogaClassService.poseList()
                      .then(onPoseList, onError);
}
}());
