'use strict';

angular.module('myApp')
.controller('WorkCtrl', ['$scope', 'projectService', function($scope, projectService) {
	projectService
    .query()
    .$promise
    .then(function(projectsResponse) {
      $scope.projects = projectsResponse;
      $scope.somethingAfterBagelsLoad = true;
    });
	}]);