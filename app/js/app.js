  var RentApp = angular.module('RentApp', [
  'ngRoute',
  'rentAppControllers',
  'rentAppServices'
])

.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/RentCarApp/Register', {
      templateUrl: 'partials/register.html',
      controller: 'RegisterCtrl'
    })
    .when('/RentCarApp/RentCars', {
      templateUrl: 'partials/rent-cars.html',
      controller: 'CarListCtrl'
    })
    .when('/RentCarApp/RegCars', {
      templateUrl: 'partials/register-cars.html',
      controller: 'RegCarsCtrl'
    })
    .when('/RentCarApp/Login', {
      templateUrl: 'partials/login.html',
      controller: 'RegisterCtrl'
    })
    .when('/RentCarApp/cars/:carId', {
      templateUrl: 'partials/car-detail.html',
        controller: 'CarDetailCtrl'
    });
    
    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
});