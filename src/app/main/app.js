(function(){
  angular.module('YogaClassApp', ['ngMaterial', 'ngMessages', 'ngRoute', 'ngResource'])
  .config(function($routeProvider){
        $routeProvider
            .when("/welcome", {
                templateUrl: "app/main/welcome.html",
                controller: "MainController"
            })
            .when("/classes", {
                templateUrl: "app/yoga-class/templates/yogaClassList.html",
                controller: "YogaClassController"
            })
            .when("/new-class", {
                templateUrl: "app/yoga-class/templates/newYogaClass.html",
                controller: "NewClassController"
            })
            .when("/edit-class/:id", {
                templateUrl: "app/yoga-class/templates/editYogaClass.html",
                controller: "EditClassController"
            })
            .when("/poses", {
                templateUrl: "app/yoga-pose/templates/yoga-poses.html",
                controller: "YogaClassController"
            })
            .when("/teachers", {
                templateUrl: "app/yoga-teacher/templates/yoga-teachers.html",
                controller: "YogaClassController"
            })
            .when("/class/:id", {
                templateUrl: "app/yoga-class/templates/yogaClassDetails.html",
                controller: "ClassDetailsController"
            })
            .otherwise({redirectTo:"/welcome"});
    });

}());
