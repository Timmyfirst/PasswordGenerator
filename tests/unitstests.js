let generator = require('../js/script.js')
let assert = require('assert');

describe('Verification Functions', function () {
  describe('VerifyWholeNatural', function () {
    it('should return true if it'''s a whole natural number ', function () {
      assert.equal(true, generator.VerifyWholeNatural(7));
    });
    it('should return false if it is not a whole natural number ', function () {
      assert.equal(false, generator.VerifyWholeNatural(-7));
    });
    //it('should return -1 when the value is not present', function () {
      //assert.equal([1, 2, 3].indexOf(4), -1);
    //});
  });
});
