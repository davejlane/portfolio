'use strict';

/* jasmine specs for controllers go here */



/* jasmine specs for controllers go here */
describe('controllers', function() {

  beforeEach(module('myApp'));

  describe('HomeCtrl', function(){

    it('should exist', inject(function($controller) {
      var scope = {},
          ctrl = $controller('HomeCtrl', {$scope:scope});

      expect(ctrl).toBeDefined();
    }));
  });

  describe('WorkCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('myApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('projects/projects.json').
          respond([
            {title: 'foo.com'}, 
            {title: 'bar.com'}
          ]);

      scope = $rootScope.$new();
      ctrl = $controller('WorkCtrl', {$scope: scope});
    }));


    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.projects).toBeUndefined();
      $httpBackend.flush();

      expect(scope.projects).toEqual([
        {title: 'foo.com'},
        {title: 'bar.com'}
      ]);
    });

  });

  describe('ProjectCtrl', function(){

    it('should exist', inject(function($controller) {
      var scope = {},
          ctrl = $controller('ProjectCtrl', {$scope:scope});

      expect(ctrl).toBeDefined();
    }));
  });

});
