(function(){
  angular.module('YogaClassApp', ['ngMaterial', 'ngMessages', 'ngRoute', 'ngResource'])
  .config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "app/main/main.html",
                controller: "MainController"
            })
            .when("/classes", {
                templateUrl: "app/yoga-class/templates/yogaClassList.html",
                controller: "YogaClassController"
            })
            .when("/class/:id", {
                templateUrl: "app/yoga-class/templates/yogaClassDetails.html",
                controller: "ClassDetailsController"
            })
            .otherwise({redirectTo:"/main"});
    });

}());
