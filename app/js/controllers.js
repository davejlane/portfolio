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
  			'thumbnail': 'http://placekitten.com/g/60/60',
        'id': 'whitepages'
  		},

  		{
  			'title': 'Disney Vacation Club',
  			'description': 'It\s a baller world after all',
  			'thumbnail': 'http://placekitten.com/g/60/60',
        'id': 'dvc'
  		},

   		{
  			'title': 'Corbis',
  			'description': 'This place be crazy',
  			'thumbnail': 'http://placekitten.com/g/60/60',
        'id': 'corbis'
  		}
  	]
  }])
  .controller('ProjectCtrl', ['$scope', function($scope) {

  }]);
