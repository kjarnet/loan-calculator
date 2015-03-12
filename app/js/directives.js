'use strict';

angular.module('loanCalculator.directives', ['loanCalculator.services'])

  .directive('ccLoanParameterInput', [function () {
    return {
      scope: {
        labelText: '@',
        units: '@',
        inputParameter: '='
      },
      templateUrl: 'partials/cc-loan-parameter-input.html'
    };
  }]);

