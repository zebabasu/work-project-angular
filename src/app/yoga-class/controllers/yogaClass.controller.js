(function(){
  angular
    .module('YogaClassApp')
    .controller('YogaClassController', YogaClassController);

function YogaClassController($scope, $http, YogaClassService) {

  var onClassList = function(data){
            $scope.classlist = data;
  };
  var onError = function(reason){
          $scope.error = reason;
  };
  // $scope.showClassList = function() {
  //     $scope.classlist = $http.get("http://localhost:8000/yogaclass/yogaclasses");
  //     console.log($scope.classlist);
  // };
  YogaClassService.classlist()
                  .then(onClassList, onError);
}

}());
