'use strict';

var rentAppControllers = angular.module('rentAppControllers', []);

rentAppControllers.controller('RegCarsCtrl', function($scope, $filter, sharedProperties) {
      $scope.regCar = function(car) {
        var newCar = angular.copy(car); 
        newCar.imageUrl = 'img/cars/noPhoto.jpg';
        
        var newID = 0;
        var maxID = 999;
        for (newID=0; newID<=maxID; newID++)     {
         var res = $filter('filter')(sharedProperties.getRegCars(), {id: newID}, true);
         if (res.length==0)
          break;
         }
        
        newCar.id = newID;
        $scope.regCars = sharedProperties.getRegCars();
        $scope.regCars.push(angular.copy(newCar));
        sharedProperties.setRegCars($scope.regCars);
        
        $scope.result = 'New car ' + car.name + ' registered.';
    };
})

   .controller('MainController', function($scope, $route, $routeParams, $location, sharedProperties) {
       sharedProperties.setUserName('Initial Test');
       sharedProperties.setRole('admin');
       $scope.$route = $route;
       $scope.$location = $location;
       $scope.$routeParams = $routeParams;
       $scope.userName = sharedProperties.getUserName;
       $scope.role = sharedProperties.getRole;
       
       $scope.logoff = function() {
          sharedProperties.setUserName('');   
       };
   })


  
   .controller('CarListCtrl', function ($scope, $http, $filter, sharedProperties) {
     $http.get('data/cars.json').success(function(data) {
       for (var i=0; i<data.length; i++)        {
         var regCars = sharedProperties.getRegCars();
         $scope.res = $filter('filter')(regCars, {id: data[i].id}, true);
         if ($scope.res.length>0)
          break;
         regCars.push(angular.copy(data[i]));
         sharedProperties.setRegCars(regCars);
        } 
        $scope.cars = sharedProperties.getRegCars();
      }) ;
           
     $scope.rentCar = function(carID, duration) {  
      var rents = sharedProperties.getRents(); 
      rents.push({id: carID, user: sharedProperties.getUserName(), duration: duration, rented: true});
      sharedProperties.setRents(rents);
     };
     
     $scope.returnCar = function(carID, duration) {   
      for (var i=0; i<sharedProperties.getRents().length; i++)
        if (sharedProperties.getRents()[i].id == carID 
             && sharedProperties.getRents()[i].user == sharedProperties.getUserName()
              && sharedProperties.getRents()[i].duration == duration) {
          sharedProperties.getRents()[i].rented = false;
        }
     };
     
     $scope.carRented = function(carID, duration) {
      var rentRes = $filter('filter')(sharedProperties.getRents(), {id: carID, user: sharedProperties.getUserName(), duration: duration}, true);
      var rented = false;
      
      for (var i=0; i<rentRes.length; i++)
        if (rentRes[i].rented == true) {
          rented = true;
          break;
        }
      
      return rented;
     };

     $scope.duration = 'week';     
     $scope.orderProp = 'name';
    })
   
   .controller('RegisterCtrl', ['$scope', '$filter', 'sharedProperties', function($scope, $filter, sharedProperties) {
    $scope.users = [];
    $scope.users = sharedProperties.getUsers();
    $scope.userName = sharedProperties.getUserName;

    $scope.register = function(user) {
      $scope.users = sharedProperties.getUsers();
      $scope.users.push(angular.copy(user));
      sharedProperties.setUsers($scope.users);
      $scope.setUserName(user.name);
      $scope.setRole(user.role);
    };
    
    $scope.login = function(user) {
      $scope.loginRes = '';
      $scope.loginRes = ($filter('filter')($scope.users, {name: user.name, password: user.password}, true)[0]).name;
      $scope.setUserName($scope.loginRes);    
    };

    $scope.isUnchanged = function(user) {
      return angular.equals(user, $scope.master);
    };
    
    $scope.setUserName = function(newValue) {
         sharedProperties.setUserName(newValue);
    };
    
    $scope.setRole = function(newValue) {
         sharedProperties.setRole(newValue);
    };
  }])
  
  .controller('CarDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/cars/' + $routeParams.carId + '.json').success(function(data) {
      $scope.car = data;
    });
  }]);