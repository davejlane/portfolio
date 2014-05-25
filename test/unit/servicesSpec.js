'use strict';

/* jasmine specs for services go here */

describe('Service: gitCache', function(){
  var gitCache;

  beforeEach(module('myApp'));

  beforeEach(inject(function($injector) {
    gitCache = $injector.get('gitCache');
  }));

  beforeEach(function(){
    gitCache.put('key', 'value');
    gitCache.put('another key', 'another value');
  });

  it('should be a git-cache', function(){
    expect(gitCache.info().id).toEqual('git-cache');
  });

  it('shoud have remove', function(){
    gitCache.remove('another key');
    expect(gitCache.get('another key')).toBeUndefined();
  });

  it('removeAll() should empty cache', function(){
    gitCache.removeAll();
    expect(gitCache.info().size).toEqual(0);
  });
});
