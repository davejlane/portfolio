'use strict';

angular.module('myApp')
  .controller('WorkCtrl', ['$scope', '$http', function($scope, $http) {


  	$http.get('projects/projects.json').success(function(data) {
  		$scope.projects = data;
  	});
  }]); 	