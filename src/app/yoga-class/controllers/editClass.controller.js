(function(){
  angular
    .module('YogaClassApp')
    .controller('EditClassController', EditClassController);

function EditClassController($scope, $location, $routeParams, YogaClassService) {
  $scope.yogaClass = {};
  $scope.selectedPoses = [];

  $scope.existingPoses = [];
  $scope.classdetails = {};
  $scope.updatedClass = {};
  var onClassDetails = function(data){

          $scope.classdetails = data;
          YogaClassService.poseList()
                              .then(onPoseList, onError);
          angular.forEach($scope.classdetails, function (value, key) {
              $scope.existingPoses.push(value.YOGA_POSE_ID);
          });
  };
  
  var onPoseList = function(data){
          $scope.poseList = data;

  };
  var onError = function(reason){
          $scope.error = reason;
  };
  $scope.saveClass = function(path, yogaClass, newClassForm){
      yogaClass.poseIdList = $scope.selectedPoses;
      if(newClassForm.$valid){
        YogaClassService.saveClass(yogaClass)
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
          $location.path("/classes");
  };

  var classid = $routeParams.id;

  YogaClassService.classdetails(classid)
                  .then(onClassDetails, onError);

}
}());
