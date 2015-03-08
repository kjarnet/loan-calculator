'use strict';

angular.module('loanCalculator.services', [])

  .factory('calculateLoan', ['$http', function ($http) {
    return function (params) {
      return $http.jsonp(
        "https://cfs-ws-itera.cicero.no/cfp/6/ws/rest/calculator/calculateLoan?_jsonp=JSON_CALLBACK",
        {method: 'GET', params: params}
      );
    };
  }]);
