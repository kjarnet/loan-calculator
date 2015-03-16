'use strict';

describe('loanCalculator.services module', function() {

  beforeEach(module('loanCalculator.services'));

  describe('testForInteger', function(){

    it('should pass for single digit numbers', inject(function(testForInteger) {
      expect(testForInteger(0)).toBe(true);
      expect(testForInteger(1)).toBe(true);
      expect(testForInteger(9)).toBe(true);
    }));

    it('should pass for multiple digit numbers', inject(function(testForInteger) {
      expect(testForInteger(1000)).toBe(true);
      expect(testForInteger(98765)).toBe(true);
    }));

    it('should pass for negative numbers', inject(function(testForInteger) {
      expect(testForInteger(-1)).toBe(true);
      expect(testForInteger(-9999)).toBe(true);
    }));

    it('should fail for a string', inject(function(testForInteger) {
      expect(testForInteger('fjas')).toBe(false);
    }));

  });

});
