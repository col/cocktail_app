'use strict';

/**
 * @ngdoc function
 * @name cocktailNinjaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cocktailNinjaApp
 */
angular.module('cocktailNinjaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
