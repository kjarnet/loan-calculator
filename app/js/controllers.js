'use strict';

angular.module('loanCalculator.controllers', ['loanCalculator.services'])

  .controller('InitCtrl', ['$scope', function ($scope) {
    $scope.inputParameters = {
      amount      : 2560000,
      downPayYears: 20,
      interest    : 3.45
    };

  }])

  .controller('CalculatorFormCtrl', ['$scope', 'calculateLoanService', function ($scope, calculateLoanService) {

    $scope.outputMonthlyPayments = 0;

    function calculateLoan(serviceArgs) {
      calculateLoanService(serviceArgs).then(function (response) {
        console.log('fetched data: ', response);
        $scope.outputMonthlyPayments = Math.round(response.data.amortizationSchedule[0].payment);
      });
    }

    var now = moment();
    var args = {
      loanRaisingMonth         : now.month(),
      loanRaisingYear          : now.year(),
      principalAmount          : $scope.inputAmount,
      annualNominalInterestRate: $scope.inputInterest,
      totalNumberOfPayments    : $scope.inputDownPayYears * 12
    };

    $scope.$watch('inputAmount', function (newVal) {
      args.principalAmount = newVal;
      calculateLoan(args);
    });
    $scope.$watch('inputInterest', function (newVal) {
      args.annualNominalInterestRate = newVal;
      calculateLoan(args);
    });
    $scope.$watch('inputDownPayYears', function (newVal) {
      args.totalNumberOfPayments = newVal * 12;
      calculateLoan(args);
    });

  }]);
