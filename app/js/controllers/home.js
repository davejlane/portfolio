'use strict';

angular.module('myApp')
  .controller('HomeCtrl', ['$scope', 'gitService',  function($scope, gitService) {

 		gitService.events('davejlane').success(function(data, success, headers) {
 			console.log(data);
 		});

  }]);	

