'use strict';

/**
 * @ngdoc overview
 * @name cocktailNinjaApp
 * @description
 * # cocktailNinjaApp
 *
 * Main module of the application.
 */
angular
  .module('cocktailNinjaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-hal'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/bottles', {
        templateUrl: 'views/bottles.html',
        controller: 'BottlesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
