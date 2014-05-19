'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('HomeCtrl', ['$scope', function($scope) {

  }])
  .controller('WorkCtrl', ['$scope', function($scope) {
  	$scope.projects = [
  		{
  			'title': 'WhitePages.com',
  			'description': 'A bunch of hooey',
  			'thumbnail': 'http://placekitten.com/g/60/60'
  		},

  		{
  			'title': 'Disney Vacation Club',
  			'description': 'It\s a baller world after all',
  			'thumbnail': 'http://placekitten.com/g/60/60'
  		},

   		{
  			'title': 'Corbis',
  			'description': 'This place be crazy',
  			'thumbnail': 'http://placekitten.com/g/60/60'
  		}
  	]
  }]);
