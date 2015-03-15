'use strict';

describe('loanCalculator.controllers module', function() {

  beforeEach(module('loanCalculator.controllers'));

  describe('Calculator Form controller', function(){
    var scope, ctrl, calculateLoanServiceDeferred, calculateLoanMock;
    var serverResponse = {
      amortizationSchedule: [
        {payment: 100}
      ]
    };

    beforeEach(inject(function($rootScope, $controller, $q) {
      scope = $rootScope.$new();
      calculateLoanServiceDeferred = $q.defer();
      calculateLoanMock = function (args) {
        return calculateLoanServiceDeferred.promise;
      };
      ctrl = $controller('CalculatorFormCtrl', {$scope: scope, calculateLoanService: calculateLoanMock});
    }));

    it('should ....', inject(function() {
      //spec body
      scope.inputParameters.amount = 1;
      calculateLoanServiceDeferred.resolve(serverResponse);
      scope.$apply();
      expect(scope.output.monthlyPayments).toBe(100);
    }));

  });

});