'use strict';

angular.module('loanCalculator.controllers', [])

  .controller('CalculatorFormCtrl', ['$scope', 'calculateLoanService', function ($scope, calculateLoanService) {
    $scope.inputParameters = {
      amount      : 2560000,
      downPayYears: 20,
      interest    : 3.45
    };

    $scope.output = {
      monthlyPayments: 0
    };

    function calculateLoan(serviceArgs) {
      calculateLoanService(serviceArgs).success(function (data) {
        console.log('fetched data: ', data);
        $scope.output.monthlyPayments = Math.round(data.amortizationSchedule[0].payment);
      });
    }

    var now = moment();
    var args = {
      loanRaisingMonth         : now.month(),
      loanRaisingYear          : now.year(),
      principalAmount          : $scope.inputParameters.amount,
      annualNominalInterestRate: $scope.inputParameters.interest,
      totalNumberOfPayments    : $scope.inputParameters.downPayYears * 12
    };

    $scope.$watch('inputParameters.amount', function (newVal) {
      args.principalAmount = newVal;
      calculateLoan(args);
    });
    $scope.$watch('inputParameters.interest', function (newVal) {
      args.annualNominalInterestRate = newVal;
      calculateLoan(args);
    });
    $scope.$watch('inputParameters.downPayYears', function (newVal) {
      args.totalNumberOfPayments = newVal * 12;
      calculateLoan(args);
    });

  }]);
