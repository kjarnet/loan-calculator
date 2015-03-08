'use strict';

angular.module('loanCalculator.routes', ['ngRoute', 'loanCalculator.controllers', 'loanCalculator.directives'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'partials/view1.html',
      controller : 'View1Ctrl'
    });
  }]).
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
