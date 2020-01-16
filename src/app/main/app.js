(function(){
  angular.module('YogaClassApp', ['ngMaterial', 'ngMessages', 'ngRoute', 'ngResource'])
  .config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "app/main/main.html",
                controller: "MainController"
            })
            .when("/classlist", {
                templateUrl: "app/yoga-class/templates/yogaClassList.html",
                controller: "YogaClassController"
            })
            .otherwise({redirectTo:"/main"});
    });

}());
