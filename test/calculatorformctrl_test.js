'use strict';

describe('loanCalculator.controllers module', function() {

  beforeEach(module('loanCalculator.controllers'));

  describe('Calculator Form controller', function(){
    var scope, ctrl;
    var serverResponse = {
      amortizationSchedule: [
        {payment: 100}
      ]
    };
    var calculateLoanMock;

    beforeEach(inject(function($rootScope, $controller, $q) {
      scope = $rootScope.$new();
      calculateLoanMock = function (args) {
        // TODO: use $q instead.
        return {
          success: function (callback) {
            callback(serverResponse);
            scope.$apply();
          }
        };
      };
      ctrl = $controller('CalculatorFormCtrl', {$scope: scope, calculateLoanService: calculateLoanMock});
    }));

    it('should ....', inject(function($controller) {
      //spec body
      scope.inputParameters.amount = 1;
      expect(scope.output.monthlyPayments).toBe(100);
    }));

  });

});