'use strict';

angular.module('loanCalculator.directives', ['loanCalculator.controllers'])

  .directive('ccLoanParameterInput', [function () {
    return {
      scope: {
        inputAmount: '=amount',
        inputDownPayYears: '=downPayYears',
        inputInterest: '=interest'
      },
      templateUrl: 'partials/cc-loan-parameter-input.html',
      controller: 'CalculatorFormCtrl'
    };
  }]);

