'use strict';

angular.module('loanCalculator.services', [])

  .factory('testForInteger', [function () {
    return function (num) {
      return !!/^\-?\d+$/.test(num);
    };
  }])

  .factory('calculateLoanFactory', ['$http', function ($http) {
    return function (params) {
      return $http.jsonp(
        "https://cfs-ws-itera.cicero.no/cfp/6/ws/rest/calculator/calculateLoan?_jsonp=JSON_CALLBACK",
        {method: 'GET', params: params}
      );
    };
  }]);
