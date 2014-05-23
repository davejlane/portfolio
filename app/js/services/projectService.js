'use strict';

// angular.module('myApp')
//   .factory('ProjectService', [ '$resource', function($resource) {

//     return $resource('projects/:projectId.json', {}, {
//       fetchOne: {method:'GET', isArray:true},
//       fetchAll: {method:'GET', params:{projectId: 'projects'}, isArray:true}
//     });

//   }]);


// angular.module('myApp')
//   .factory('ProjectService',
//     function($resource) {
//       return $resource('projects/projects.json');
//     }
//   );


angular.module('myApp')
  .factory('projectService',
    function($resource) {
      return $resource('projects/:projectId.json', {}, {
        query: {params: {projectId: 'projects'}, isArray: true},
        get: {isArray: true}
      });
    }
  );