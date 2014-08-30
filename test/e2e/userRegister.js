  describe('Users register & Login (RegisterCtrl)', function() {
      
    var loginA = element.all(by.css('a')).last();
    var testUser = ['test user name', 'user@mail', 'password'];

    it('should register user and check if s/he is logged in', function() {
      browser.get('app#/RentCarApp/Register');
      
      element(by.model('user.name')).sendKeys(testUser[0]);
      element(by.model('user.email')).sendKeys(testUser[1]);
      element(by.model('user.password')).sendKeys(testUser[2]);
      element(by.model('user.pass2')).sendKeys(testUser[2]);
      element(by.model('user.role')).click();             // todo: check also for admin register
      element(by.model('user.agree')).click();
      element(by.css('button')).click();
            
      expect(loginA.getText()).toBe('Logoff (' + testUser[0] + ')');
    });
    
    it('should logoff user', function() {
      loginA.click();
      expect(loginA.getText()).toBe('Login');
    });
    
    it('should login registered user', function() {
      loginA.click();
      
      element(by.model('user.name')).sendKeys(testUser[0]);
      element(by.model('user.password')).sendKeys(testUser[2]);
      element(by.css('button')).click();
      
      expect(loginA.getText()).toBe('Logoff (' + testUser[0] + ')');
    });
    
 });