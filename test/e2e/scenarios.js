'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('RentCar App', function() {

  it('should redirect index.html to index.html#/phones', function() {
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/phones');
      });
  });
  
  describe('Phone list view', function() {
    beforeEach(function() {
      browser.get('app/index.html#/phones');
    })});
    
});