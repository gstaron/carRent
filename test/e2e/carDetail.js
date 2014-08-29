'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('RentCar App', function() {

 describe('Car detail view (CarDetailCtrl) ', function() {

    beforeEach(function() {                           
      browser.get('app#/RentCarApp/RentCars');
    });
    
    it('should render car specific link', function() {
      var query = element(by.model('query'));
      query.clear();
      var list = element.all(by.css('.phones li a'));
  
      list.first().click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('/app')[1]).toBe('/RentCarApp/cars/2');
      });
  
    });
    
  });
    
});