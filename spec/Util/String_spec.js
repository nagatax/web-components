describe('Validator', function() {
  describe('String', function() {

    /** {Util.String} */
    var _sut;

    /**
     * 初期化処理
     */
    beforeEach(function() {
      var Validator = require('../../src/Util/String');
      _sut = new Validator.String();
    });

    /**
     * 事後処理
     */
    afterEach(function() {
      // pass
    });

    it('getLength OK Pattern', function() {
      expect(_sut.getLength("良")).toEqual(1);
    });

    it('getLength OK Pattern サロゲートペア', function() {
      expect(_sut.getLength("𠮟る")).toEqual(2);
    });

    it('getLength NG Pattern', function() {
      expect(_sut.getLength(1)).toEqual(null);
    });
  })
});
