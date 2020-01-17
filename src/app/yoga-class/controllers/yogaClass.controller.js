(function(){
  angular
    .module('YogaClassApp')
    .controller('YogaClassController', YogaClassController);

function YogaClassController($scope, $location, YogaClassService) {

  $scope.goto = function(page, id) {

        $location.path(page+"/"+id);
        
  };

  var onClassList = function(data){
          $scope.classlist = data;
  };
  var onError = function(reason){
          $scope.error = reason;
  };

  YogaClassService.classlist()
                  .then(onClassList, onError);
}

}());
