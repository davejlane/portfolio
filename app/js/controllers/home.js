'use strict';

angular.module('myApp')
.controller('HomeCtrl', ['$scope', 'gitCache',  'gitService',  function($scope, gitCache, gitService) {

	$scope.pageClass = 'page-home';

	gitService
		.query()
		.$promise
		.then(function(gitResponse) {
			gitCache.put('data', gitResponse);
			$scope.responses = gitCache.get('data');
		});
}]);	

