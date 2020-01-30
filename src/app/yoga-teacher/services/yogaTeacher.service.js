(function(){
  angular
    .module('YogaClassApp')
    .factory('YogaTeacherService', YogaTeacherService);

function YogaTeacherService($http) {
  var teacherlist = function(){
              return $http.get("http://localhost:8000/yogaclass/yogateachers")
                          .then(function(response){
                             return response.data;
                          });
  };

  return {
      teacherlist:teacherlist
    };
  }
}());
