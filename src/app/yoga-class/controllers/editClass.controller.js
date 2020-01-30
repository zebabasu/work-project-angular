(function(){
  angular
    .module('YogaClassApp')
    .controller('EditClassController', EditClassController);

function EditClassController($scope, $location, $routeParams, YogaClassService) {
  $scope.selectedPoses = [];
  $scope.classdetails = {};
  $scope.updatedClass = {};

  var onClassDetails = function(data){

          $scope.classdetails = data;
          $scope.updatedClass.className=$scope.classdetails[0].CLASSNAME;
          YogaClassService.poseList()
                              .then(onPoseList, onError);
          angular.forEach($scope.classdetails, function (value, key) {
              if(value.YOGA_POSE_ID != null){
                $scope.selectedPoses.push(value.YOGA_POSE_ID);
              }
          });
  };

  var onPoseList = function(data){
          $scope.masterPoseList = data;

  };
  var onError = function(reason){
          $scope.error = reason;
  };
  $scope.isExistingPose = function(poseid){
      if($scope.selectedPoses.indexOf(poseid) > -1){
        return 1;
      }
      else{
        return 0;
      }
  };
  $scope.updateClass = function(path, editClassForm){

      $scope.updatedClass.id = $routeParams.id;
      $scope.updatedClass.poseIdList = $scope.selectedPoses;
      
      if(editClassForm.$valid){
        YogaClassService.updateClass($scope.updatedClass)
                        .then(function(response) {
                          $location.path(path +"/"+response);
                        })
                        .catch(function(response) { console.log('failure', response)});
      }


  };
  $scope.toggle = function (item, list) {

        var idx = list.indexOf(item);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(item);
        }
  };
  $scope.cancelClass = function() {
          $location.path("/class/"+classid);
  };

  var classid = $routeParams.id;

  YogaClassService.classdetails(classid)
                  .then(onClassDetails, onError);

}
}());
