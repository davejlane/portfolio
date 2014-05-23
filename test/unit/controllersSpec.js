

describe('WorkCtrl', function() {
  var $q,
      $rootScope,
      $scope,
      mockProjectService,
      mockProjectResponse = [{title: 'whitepages'}, {title: 'disney'}];
  
  beforeEach(module('myApp'));
  
  beforeEach(inject(function(_$q_, _$rootScope_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));
  
  beforeEach(inject(function($controller) {
    $scope = $rootScope.$new();
    
    mockProjectService = {
      query: function() {
        queryDeferred = $q.defer();
        return {$promise: queryDeferred.promise};
      }
    }
    
    spyOn(mockProjectService, 'query').andCallThrough();
    
    $controller('WorkCtrl', {
      '$scope': $scope,
      'projectService': mockProjectService
    });
  }));
  
  describe('projectService.query', function() {
    
    beforeEach(function() {
      queryDeferred.resolve(mockProjectResponse);
      $rootScope.$apply();
    });
    
    it('should query the projectService', function() {
      expect(mockProjectService.query).toHaveBeenCalled();
    });
    
    it('should set the response from the projectServiceQuery to $scope.projects', function() {
      expect($scope.projects).toEqual(mockProjectResponse);
    });
    
    it('should set $scope.somethingAfterBagelsLoad to true', function() {
      expect($scope.somethingAfterBagelsLoad).toBe(true);
    });
  });
});

describe('ProjectCtrl', function() {
  var $q,
      $rootScope,
      $scope,
      mockProjectService,
      mockProjectResponse = [{title: 'whitepages', description: "A bunch of hooey"}];
  
  beforeEach(module('myApp'));
  
  beforeEach(inject(function(_$q_, _$rootScope_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));
  
  beforeEach(inject(function($controller) {
    $scope = $rootScope.$new();
    
    mockProjectService = {
      get: function() {
        queryDeferred = $q.defer();
        return {$promise: queryDeferred.promise};
      }
    }
    
    spyOn(mockProjectService, 'get').andCallThrough();
    
    $controller('ProjectCtrl', {
      '$scope': $scope,
      'projectService': mockProjectService
    });
  }));
  
  describe('projectService.get', function() {
    
    beforeEach(function() {
      queryDeferred.resolve(mockProjectResponse);
      $rootScope.$apply();
    });
    
    it('should query the projectService', function() {
      expect(mockProjectService.get).toHaveBeenCalled();
    });
    
    it('should set the response from the projectServiceGet to $scope.project', function() {
      expect($scope.project).toEqual(mockProjectResponse);
    });
  });
});