(function(){
  angular
    .module('YogaClassApp')
    .controller('YogaTeacherController', YogaTeacherController);

function YogaTeacherController($scope, YogaTeacherService) {
  $scope.teacherList = {};
  var onteacherlist = function(data){
          $scope.teacherList = data;
  };
  var onError = function(reason){
          $scope.error = reason;
  };
  YogaTeacherService.teacherlist()
                      .then(onteacherlist, onError);
}
}());
