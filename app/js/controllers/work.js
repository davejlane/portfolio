'use strict';

angular.module('myApp')
  .controller('WorkCtrl', ['$scope', 'projectsApi', function($scope, projectsApi) {

  	projectsApi.fetchAll().success(function(data) {
  		$scope.projects = data;
  	});
  }]); 	
