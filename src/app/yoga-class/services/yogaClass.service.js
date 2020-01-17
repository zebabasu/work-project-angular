(function(){
  angular
    .module('YogaClassApp')
    .factory('YogaClassService', YogaClassService);

function YogaClassService($http) {
  var classlist = function(){
              return $http.get("http://localhost:8000/yogaclass/yogaclasses")
                          .then(function(response){
                             return response.data;
                          });
        };
  var classdetails = function(id){
              return $http.get("http://localhost:8000/yogaclass/yogaclasses"+"/"+id)
                          .then(function(response){
                             return response.data;
                          });
        };
  return {
      classlist:classlist,
      classdetails:classdetails
    };
  }
}());
