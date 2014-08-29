'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('RentCar App', function() {

  describe('Car list view (CarListCtrl) ', function() {

    beforeEach(function() {                           
      browser.get('app#/RentCarApp/RentCars');
    });

    it('should filter the car list as user types into the search box', function() {

      var carList = element.all(by.repeater('car in cars'));
      var query = element(by.model('query'));

      query.sendKeys('sedan');
      expect(carList.count()).toBe(3);

      query.clear();
      query.sendKeys('german');
      expect(carList.count()).toBe(1);
    });
  });
  
  
});