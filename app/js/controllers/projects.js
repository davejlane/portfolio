'use strict';

angular.module('myApp')
.controller('ProjectsCtrl', ['$scope', 'projectService', function($scope, projectService) {

	$scope.pageClass = 'page-projects';
	
	projectService
    .query()
    .$promise
    .then(function(projectsResponse) {
      $scope.projects = projectsResponse;
      $scope.somethingAfterBagelsLoad = true;
    });
	}]);