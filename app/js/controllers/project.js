'use strict';

angular.module('myApp')
.controller('ProjectCtrl', ['$scope', '$routeParams', 'projectService', function($scope, $routeParams, projectService) {

	$scope.pageClass = 'page-project';

	projectService
    .get({projectId: $routeParams.projectId})
    .$promise
    .then(function(projectsResponse) {
      $scope.project = projectsResponse;
    });
	}]);