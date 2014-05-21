'use strict';

/* jasmine specs for controllers go here */
describe('controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

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


    it('should create "projects" model with 2 projects fetched from xhr', function() {
      expect(scope.projects).toBeUndefined();
      $httpBackend.flush();

      expect(scope.projects).toEqual([
        {title: 'foo.com'},
        {title: 'bar.com'}
      ]);
    });

  });

  describe('ProjectCtrl', function(){
    var scope, $httpBackend, ctrl,
        fooProjectData = function() {
          return {
            title: 'WhitePages.com',
            description: ['A bunch of hooey']
          }
        };

    beforeEach(module('myApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('projects/foo.json')
      .respond(fooProjectData());

      $routeParams.projectId = 'foo';
      scope = $rootScope.$new();
      ctrl = $controller('ProjectCtrl', {$scope: scope});
    }));


    it('should fetch phone detail', function() {
      expect(scope.project).toBeUndefined();
      $httpBackend.flush();

      expect(scope.project).toEqualData(fooProjectData());
    });
  });
});
