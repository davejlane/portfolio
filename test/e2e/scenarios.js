'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('/app');

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('/app/#/home');
    });


    it('should render home when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/I am a Seattle-based UI Engineer./);
    });

  });


  describe('work', function() {

    beforeEach(function() {
      browser.get('/app/#/work');
    });


    it('should render work when user navigates to work', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/work view/);
    });

  });
});
