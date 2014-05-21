'use strict';

angular.module('myApp')
  .controller('WorkCtrl', ['$scope', 'ProjectService', function($scope, ProjectService) {

  	ProjectService.fetchAll().success(function(data) {
  		$scope.projects = data;
  	});
  }]); 	
