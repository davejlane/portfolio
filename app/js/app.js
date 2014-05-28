'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngResource'

])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
  	templateUrl: 'views/home.html',
  	controller: 'HomeCtrl'
  });
  $routeProvider.when('/projects', {
  	templateUrl: 'views/projects.html',
  	controller: 'ProjectsCtrl'
  });
  $routeProvider.when('/projects/:projectId', {
    templateUrl: 'views/project.html',
    controller: 'ProjectCtrl'
  });
  $routeProvider.otherwise({
  	redirectTo: '/home'
  });
}])
.run(['$rootScope', '$location', function($rootScope, $location) {
   var path = function() { return $location.path(); };
   $rootScope.$watch(path, function(newVal, oldVal){
     $rootScope.activeTab = newVal;
   });
}]);
