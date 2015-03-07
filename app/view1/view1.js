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
        downPay : 20,
        interest: 3.45
      };

      $scope.output = {
        monthly: 0
      };


      $scope.$watch('inputParameters', function (newval) {
        var arg = {
          loanRaisingMonth         : 9,
          loanRaisingYear          : moment().year(),
          principalAmount          : newval.amount,
          annualNominalInterestRate: 3.45,
          totalNumberOfPayments    : 240
        };
        calculateLoan(arg).success(function (data) {
          console.log('fetched data: ', data);
        });
      }, true);

    }]);