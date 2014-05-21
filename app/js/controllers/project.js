'use strict';

angular.module('myApp')
  .controller('ProjectCtrl', ['$scope', '$routeParams', 'projectsApi',  function($scope, $routeParams, projectsApi) {

  	projectsApi.fetchProject($routeParams.projectId).success(function(data) {
  		$scope.project = data;
  	});
  }]);	
