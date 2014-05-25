'use strict';

angular.module('myApp')
	.factory('gitCache', ['$cacheFactory', function($cacheFactory) {
	 return $cacheFactory('git-cache');
	}])
  .factory('gitService',
    function($resource) {
      return $resource('https://api.github.com/users/davejlane/events', {}, {
        query: {isArray: true, cache: true}
      });
    }
  );
