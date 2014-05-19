'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
  	templateUrl: 'views/home.html', 
  	controller: 'HomeCtrl'
  });
  $routeProvider.when('/work', {
  	templateUrl: 'views/work.html', 
  	controller: 'WorkCtrl'
  });
  $routeProvider.when('/work/:project', {
    templateUrl: 'views/project.html', 
    controller: 'ProjectCtrl'
  });
  $routeProvider.otherwise({
  	redirectTo: '/home'
  });
}]);
