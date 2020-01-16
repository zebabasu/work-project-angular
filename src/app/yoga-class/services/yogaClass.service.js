(function(){
  angular
    .module('yogaClassApp')
    .factory('YogaClassService', YogaClassService);

function YogaClassService() { }
  return $resource("http://localhost:8000/yogaclass/yogaclasses");
}();
