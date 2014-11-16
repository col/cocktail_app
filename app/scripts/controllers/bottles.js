'use strict';

angular.module('cocktailNinjaApp')
  .controller('BottlesCtrl', function ($scope, DrinksService) {

    function emptyBottle() {
      return { type: "", amount: "", pin: "" };
    }

    $scope.bottles = [];
    $scope.selectedBottle = null;
    $scope.newBottle = null;

    $scope.init = function() {
      DrinksService.load().then( function( service ) {
        return service.$get('bottles');
      }).then( function(response) {
        return response.$get('bottles');
      }).then( function(data) {
        $scope.bottles = data;
      });
    };

    $scope.selectBottle = function(bottle) {
      $scope.selectedBottle = bottle;
    };

    $scope.unselectBottle = function() {
      $scope.selectedBottle = null;
    };

    $scope.deleteBottle = function(bottle) {
      bottle.$del('self').then(function(result) {
        $scope.bottles = $scope.bottles.filter(function (el) {
          return el !== bottle;
        });
      });
    };

    $scope.saveBottle = function() {
      if( $scope.selectedBottle ) {
        $scope.selectedBottle.$patch('self', {}, $scope.newBottle).then( function() {
          console.log('success!');
        });
      } else {
        $scope.createBottle();
      }
    };

    $scope.createBottle = function() {
      DrinksService.load().then( function( service ) {
        return service.$post('bottles', {}, $scope.newBottle);
      }).then( function(bottle) {
        $scope.bottles.push(bottle);
        $scope.newBottle = null;
      });
    };

    $scope.editBottle = function(bottle) {
      $scope.newBottle = angular.copy(bottle);
    };

    $scope.addBottle = function() {
      $scope.selectedBottle = null;
      $scope.newBottle = emptyBottle();
    };

    $scope.backToList = function() {
      $scope.selectedBottle = null;
      $scope.newBottle = null;
    };

  });
