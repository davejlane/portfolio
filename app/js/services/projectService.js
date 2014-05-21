'use strict';

angular.module('myApp')
  .factory('ProjectService', [ '$http', function( $http) {
		return {
    	fetchAll: function() {
      	return $http.get('projects/projects.json');
      },

      fetchProject: function(project) {
      	return $http.get('projects/'+ project +'.json' );
      } 
    };
  }]);
