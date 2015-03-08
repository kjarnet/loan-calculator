'use strict';

angular.module('loanCalculator.controllers', [])

  .controller('View1Ctrl', ['$scope',

    function ($scope) {
      $scope.inputParameters = {
        amount  : 2560000,
        downPayYears : 20,
        interest: 3.45
      };

    }]);