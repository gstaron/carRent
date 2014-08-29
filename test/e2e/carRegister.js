  describe('Car register (RegCarsCtrl) ', function() {

    beforeEach(function() {                           
      browser.get('app#/RentCarApp/RegCars');
    });

    it('should register car and check in car list for it', function() {
      var testCar = ['test car name', 'test car type', 'test car description'];
      element(by.model('car.name')).sendKeys(testCar[0]);
      element(by.model('car.type')).sendKeys(testCar[1]);
      element(by.model('car.desc')).sendKeys(testCar[2]);
      element(by.css('button')).click();
      
      browser.get('app#/RentCarApp/RentCars'); 
      element(by.model('query')).sendKeys(testCar[0]);
      
      var carNameColumn = element.all(by.repeater('car in cars').column('{{car.name}}'));
      function getNames() {
        return carNameColumn.map(function(elm) {
          return elm.getText();
        });
      }
      
      expect(getNames()).toEqual([
        testCar[0]
      ]);         // doesn't work !!!
    });
    
 });