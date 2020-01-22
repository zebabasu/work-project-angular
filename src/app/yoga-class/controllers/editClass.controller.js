(function(){
  angular
    .module('YogaClassApp')
    .controller('EditClassController', EditClassController);

function EditClassController($scope, $location, YogaClassService) {
  $scope.yogaClass = {};
  $scope.newYogaClassPoses = {};
  var onPoseList = function(data){
          $scope.poseList = data;
  };
  var onError = function(reason){
          $scope.error = reason;
  };
  $scope.saveClass = function(path, yogaClass, newClassForm){
      if(newClassForm.$valid){
        YogaClassService.saveClass(yogaClass)
                        .then(function(response) {
                          $location.path(path +"/"+response);
                        })
                        .catch(function(response) { console.log('failure', response)});
      }


  };
  $scope.cancelClass = function() {
          $location.path("/classes");
  };
  $scope.poseList = function(){
      YogaClassService.poseList()
                      .then(onPoseList, onError);
  };

}
}());
