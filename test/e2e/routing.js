describe('Main menu routeProvider (ngRoute) ', function() {

    beforeEach(function() {                           
      browser.get('app');
    });
    
    it('should go to all navigation pages', function() {
      var toBes = ["/RentCarApp/RentCars", "/RentCarApp/RegCars", "/RentCarApp/Register"];
      var list = element.all(by.css('a'));
      
        list.first().click();
        browser.getLocationAbsUrl().then(function(url) {
          expect(url.split('/app')[1]).toBe(toBes[0]);
        });
        
        list.get(1).click();
        browser.getLocationAbsUrl().then(function(url) {
          expect(url.split('/app')[1]).toBe(toBes[1]);
        });                 
        
        list.get(2).click();
        browser.getLocationAbsUrl().then(function(url) {
          expect(url.split('/app')[1]).toBe(toBes[2]);
        });                

    });    
   });