'use strict';

var rentAppServices = angular.module('rentAppServices', []);
  
rentAppServices.service('sharedProperties', function() {
    var userName = '';
    var users = [];
    var regCars = [];
    var role = '';
    var rents = [];
        
    return {
        getUserName: function() {
            return userName;
        },
        setUserName: function(value) {
            userName = value;
        },
        getRole: function() {
            return role;
        },
        setRole: function(value) {
            role = value;
        },
        getUsers: function() {
            return users;
        },
        setUsers: function(value) {
            users = value;
        },
        getRegCars: function() {
            return regCars;
        },
        setRegCars: function(value) {
            regCars = value;
        }     ,
        getRents: function() {
            return rents;
        },
        setRents: function(value) {
            rents = value;
        }
    }
})  ;