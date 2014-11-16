'use strict';

/**
 * @ngdoc function
 * @name cocktailNinjaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cocktailNinjaApp
 */
angular.module('cocktailNinjaApp')
  .controller('MainCtrl', function ($scope, DrinksService) {

    function emptyDrink() {
      return { name: "", ingredients: [ { type: "", amount: null } ] };
    }

    $scope.drinks = undefined;
    $scope.selectedDrink = null;
    $scope.newDrink = null;

    $scope.init = function() {
      DrinksService.load().then( function( service ) {
          return service.$get('drinks');
      }).then( function(response) {
        return response.$get('drinks');
      }).then( function(data) {
        $scope.drinks = data;
      });
    };

    $scope.selectDrink = function(drink) {
      $scope.selectedDrink = drink;
    };

    $scope.unselectDrink = function() {
      $scope.selectedDrink = null;
    };

    $scope.deleteDrink = function(drink) {
      drink.$del('self').then(function(result) {
        $scope.drinks = $scope.drinks.filter(function (el) {
            return el !== drink;
        });
        $scope.selectedDrink = null;
      });
    };

    $scope.saveDrink = function() {
      if( $scope.selectedDrink ) {
        $scope.selectedDrink.$patch('self', {}, $scope.newDrink).then( function() {
          console.log('success!');
          $scope.backToList();
        });
      } else {
        $scope.createDrink();
      }
    };

    $scope.createDrink = function() {
      DrinksService.load().then( function( service ) {
        return service.$post('drinks', {}, $scope.newDrink);
      }).then( function(drink) {
        $scope.drinks.push(drink);
        $scope.newDrink = null;
      });
    };

    $scope.addIngredient = function() {
      $scope.newDrink.ingredients.push({});
    };

    $scope.addDrink = function() {
      $scope.selectedDrink = null;
      $scope.newDrink = emptyDrink();
    };

    $scope.backToList = function() {
      $scope.selectedDrink = null;
      $scope.newDrink = null;
    };

    $scope.editDrink = function(drink) {
      $scope.newDrink = angular.copy(drink);
    };

  });
