'use strict';

angular.module('cocktailNinjaApp')
  .factory('DrunkamatronService', function ($http) {

    return {
      'makeAwesomeDrink': function(drink, bottles) {
        var recipe = _.map(drink.ingredients, function(ingredient) {
          var bottle = _.find(bottles, function(bottle) { return bottle.type == ingredient.type });
          return bottle.pin + '-' + ingredient.amount;
        }).join('/');

        $http.get('http://192.168.240.1/arduino/make_drink/'+recipe).
        //$http.get('http://arduino.local/arduino/make_drink/'+recipe).

        success(function() {
          console.log('your drink is served');
        }).
        error(function() {
          console.log('call col, he\'ll sort your shit out');
        });
      
      // 'updateDrinkBottles': function(drink, bottle){
       
      // }  

      }
    };

  });