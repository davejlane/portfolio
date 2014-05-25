describe('HomeCtrl', function() {
  var $q,
      $rootScope,
      $scope,
      mockGitCache,
      mockGitService,
      mockGitResponse = [{id: 'foo'}, {id: 'bar'}];
  
  beforeEach(module('myApp'));
  
  beforeEach(inject(function(_$q_, _$rootScope_, _$cacheFactory_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
    $cacheFactory = _$cacheFactory_;
  }));
  
  beforeEach(inject(function($controller) {
    $scope = $rootScope.$new();

    mockGitCache = $cacheFactory;
    
    mockGitService = {
      query: function() {
        queryDeferred = $q.defer();
        return {$promise: queryDeferred.promise};
      }
    }
    
    spyOn(mockGitService, 'query').andCallThrough();
    
    $controller('HomeCtrl', {
      '$scope': $scope,
      'gitService': mockGitService
    });
  }));
  
  describe('gitService.query', function() {
    
    beforeEach(function() {
      queryDeferred.resolve(mockGitResponse);
      $rootScope.$apply();
    });
    
    it('should query the gitService', function() {
      expect(mockGitService.query).toHaveBeenCalled();
    });

    it('should cache the response', function() {
      expect(mockGitCache).toBeDefined();
    });
    
    it('should set the response from the gitServiceQuery to $scope.responses', function() {
      expect($scope.responses).toEqual(mockGitResponse);
    });
    
  });
});

describe('ProjectsCtrl', function() {
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
    
    $controller('ProjectsCtrl', {
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