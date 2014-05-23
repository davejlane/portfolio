'use strict';

angular.module('myApp')
.controller('ProjectsCtrl', ['$scope', 'projectService', function($scope, projectService) {
	projectService
    .query()
    .$promise
    .then(function(projectsResponse) {
      $scope.projects = projectsResponse;
      $scope.somethingAfterBagelsLoad = true;
    });
	}]);