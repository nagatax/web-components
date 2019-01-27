describe('Validator', function() {
  describe('Address', function() {

    /** {Validator.Address} */
    var _sut;

    /**
     * 初期化処理
     */
    beforeEach(function() {
      var Validator = require('../../src/Validator/Address');
      _sut = new Validator.Address();
    });

    /**
     * 事後処理
     */
    afterEach(function() {
      // pass
    });

    it('isValidPostCode OK Pattern', function() {
      expect(_sut.isValidPostCode("123-4567")).toEqual(true);
    });

    it('isValidPostCode NG Pattern', function() {
      expect(_sut.isValidPostCode("abc-defg")).toEqual(false);
    });
  })
});
