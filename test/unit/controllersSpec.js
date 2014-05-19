'use strict';

/* jasmine specs for controllers go here */



/* jasmine specs for controllers go here */
describe('controllers', function() {

  describe('HomeCtrl', function(){

    beforeEach(module('myApp'));

    it('should exist', inject(function($controller) {
      var scope = {},
          ctrl = $controller('HomeCtrl', {$scope:scope});

      expect(ctrl).toBeDefined();
    }));
  });

  describe('WorkCtrl', function(){

    beforeEach(module('myApp'));

    it('should exist', inject(function($controller) {
      var scope = {},
      ctrl = $controller('WorkCtrl', {$scope:scope});

      expect(ctrl).toBeDefined();
    }));

    it('should have a projects model', inject(function($controller) {
      var scope = {},
      ctrl = $controller('WorkCtrl', {$scope:scope});

      expect(scope.projects).toBeDefined();
      expect(scope.projects.length).toBe(3);
    }));
  });

  describe('ProjectCtrl', function(){

    beforeEach(module('myApp'));

    it('should exist', inject(function($controller) {
      var scope = {},
          ctrl = $controller('ProjectCtrl', {$scope:scope});

      expect(ctrl).toBeDefined();
    }));
  });

});
