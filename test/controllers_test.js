'use strict';

describe('loanCalculator.controllers module', function() {

  beforeEach(module('loanCalculator.controllers'));

  describe('Calculator Form controller', function(){
    var scope, ctrl, calculateLoanServiceDeferred, calculateLoanMock;
    var serverResponse = {
      data: {
        amortizationSchedule: [
          {payment: 100}
        ]
      }
    };

    beforeEach(inject(function($rootScope, $controller, $q) {
      scope = $rootScope.$new();
      calculateLoanServiceDeferred = $q.defer();
      calculateLoanMock = function (args) {
        return calculateLoanServiceDeferred.promise;
      };
      ctrl = $controller('CalculatorFormCtrl', {$scope: scope, calculateLoanFactory: calculateLoanMock});
    }));

    it('should calculate monthly payments when an input is changed', inject(function() {
      //spec body
      scope.inputAmount = 1;
      calculateLoanServiceDeferred.resolve(serverResponse);
      scope.$apply();
      expect(scope.outputMonthlyPayments).toBe(100);
    }));

  });

});
