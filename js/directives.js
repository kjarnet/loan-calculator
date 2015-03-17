'use strict';

angular.module('loanCalculator.directives', ['loanCalculator.controllers', 'loanCalculator.services'])

  .directive('ccInteger', ['testForInteger', function (testForInteger) {
    return {
      require: 'ngModel',
      link   : function (scope, elm, attrs, ngModelController) {
        ngModelController.$validators.ccInteger = function (modelValue, viewValue) {
          if (ngModelController.$isEmpty(modelValue)) {
            return true;// consider empty models to be valid
          }
          return testForInteger(viewValue);
        };
      }
    };
  }])

  .directive('ccCalculatorForm', [function () {
    return {
      scope: {
        inputAmount: '=amount',
        inputDownPayYears: '=downPayYears',
        inputInterest: '=interest'
      },
      templateUrl: 'partials/cc-calculator-form.html',
      controller: 'CalculatorFormCtrl'
    };
  }]);

