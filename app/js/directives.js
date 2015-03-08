'use strict';

angular.module('loanCalculator.directives', ['loanCalculator.services'])

  .directive('ccMonthlyPayments', ['calculateLoanService', function (calculateLoanService) {

    return {
      scope: {
        amount: '=',
        interest: '=',
        downPayYears: '='
      },
      link: function (scope, element, attrs) {
        var now = moment();
        var args = {
          loanRaisingMonth         : now.month(),
          loanRaisingYear          : now.year(),
          principalAmount          : scope.amount,
          annualNominalInterestRate: scope.interest,
          totalNumberOfPayments    : scope.downPayYears * 12
        };
        function calculateLoan(serviceArgs) {
          calculateLoanService(serviceArgs).success(function (data) {
            console.log('fetched data: ', data);
            element.text(Math.round(data.amortizationSchedule[0].payment));
          });
        }
        scope.$watch('amount', function (newVal) {
          args.principalAmount = newVal;
          calculateLoan(args);
        });
        scope.$watch('interest', function (newVal) {
          args.annualNominalInterestRate = newVal;
          calculateLoan(args);
        });
        scope.$watch('downPayYears', function (newVal) {
          args.totalNumberOfPayments = newVal * 12;
          calculateLoan(args);
        });
      }
    };

  }]);