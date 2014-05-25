'use strict';

angular.module('myApp')
  .factory('projectService',
    function($resource) {
      return $resource('projects/:projectId.json', {}, {
        query: {params: {projectId: 'projects'}, isArray: true, cache: true}
      });
    }
  );