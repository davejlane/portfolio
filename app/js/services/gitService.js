angular.module('myApp')
	.factory('gitService', function($http) {
		var url = 'https://api.github.com';

		var runUserRequest = function(username, path) {
			return $http({
				method: 'JSONP',
					 url: url + '/users/' + 
								username + '/' +
								path + '?callback=JSON_CALLBACK'

			});
		}

		return {
			events: function(username) {
				return runUserRequest(username, 'events');
			}
		};
	});