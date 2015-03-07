'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller : 'View1Ctrl'
    });
  }])
  .factory('calculateLoan', ['$http', function ($http) {
    return function (params) {
      return $http.jsonp(
        "https://cfs-ws-itera.cicero.no/cfp/6/ws/rest/calculator/calculateLoan?_jsonp=JSON_CALLBACK",
        {method: 'GET', params: params}
      );
    };
  }])
  .controller('View1Ctrl', ['$scope', 'calculateLoan',
    function ($scope, calculateLoan) {
      $scope.inputParameters = {
        amount  : 2560000,
        downPayYears : 20,
        interest: 3.45
      };

      $scope.output = {
        monthly: 0
      };

      $scope.$watch('inputParameters', function (newval) {
        var now = moment();
        var downPayNum = newval.downPayYears * 12;
        var arg = {
          loanRaisingMonth         : now.month(),
          loanRaisingYear          : now.year(),
          principalAmount          : newval.amount,
          annualNominalInterestRate: newval.interest,
          totalNumberOfPayments    : downPayNum
        };
        calculateLoan(arg).success(function (data) {
          console.log('fetched data: ', data);
          $scope.output.monthly = Math.round(data.amortizationSchedule[0].payment);
        });
      }, true);

    }]);