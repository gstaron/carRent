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
  
   it('should be possible to control car order via the drop down select box', function() {

      var carNameColumn = element.all(by.repeater('car in cars').column('{{car.name}}'));
      var query = element(by.model('query'));
      query.clear();

      function getNames() {
        return carNameColumn.map(function(elm) {
          return elm.getText();
        });
      }

      query.sendKeys('sedan'); //let's narrow the dataset to make the test assertions shorter

      expect(getNames()).toEqual([
        "BMW",
        "Cadillac"  ,
        "Lexus"
      ]);

      element(by.model('orderProp')).element(by.css('option[value="type"]')).click();

      expect(getNames()).toEqual([
        "Cadillac",
        "BMW",
        "Lexus"
      ]);
    });
    
   it('should be possible to rent car and then return the right car with duration', function() {
    var btn = element(by.css('button'));
    btn.click();
    expect(btn.getText()).toBe('Return');
    
    element(by.model('duration')).element(by.css('option[value="month"]')).click();
    expect(btn.getText()).toBe('Rent');
   });
    
 });