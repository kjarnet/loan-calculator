'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('View1Ctrl', {$scope: scope});
    }));

    it('should ....', inject(function($controller) {
      //spec body
      expect(ctrl).toBeDefined();
    }));

  });
});