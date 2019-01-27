describe('Validator', function() {
    describe('Common', function() {

    /** {Validator.Common} */
    var _sut;

    /**
     * 初期化処理
     */
    beforeEach(function() {
      var Validator = require('../../src/Validator/Common');
      _sut = new Validator.Common();
    });

    /**
     * 事後処理
     */
    afterEach(function() {
      // pass
    });

    it('isContainString OK Pattern pre', function() {
      expect(_sut.isContainString("javascript", "java")).toEqual(true);
    });

    it('isContainString OK Pattern middle', function() {
      expect(_sut.isContainString("javascript", "vasc")).toEqual(true);
    });

    it('isContainString OK Pattern post', function() {
      expect(_sut.isContainString("javascript", "script")).toEqual(true);
    });

    it('isContainString NG Pattern', function() {
      expect(_sut.isContainString("javascript", "bad string")).toEqual(false);
    });
  })
});
