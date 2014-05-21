'use strict';

angular.module('myApp')
  .controller('ProjectCtrl', ['$scope', '$routeParams', 'ProjectService',  function($scope, $routeParams, ProjectService) {

  	ProjectService.fetchProject($routeParams.projectId).success(function(data) {
  		$scope.project = data;
  	});
  }]);	


