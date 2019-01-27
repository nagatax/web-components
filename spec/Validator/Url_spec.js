describe('Validator', function() {
  describe('Url', function() {

    /** {Validator.Url} */
    var _sut;

    /**
     * 初期化処理
     */
    beforeEach(function() {
      var Validator = require('../../src/Validator/Url');
      _sut = new Validator.Url();
    });

    /**
     * 事後処理
     */
    afterEach(function() {
      // pass
    });

    it('isUrlFormat OK Pattern http', function() {
      expect(_sut.isUrlFormat("http://example.co.jp")).toEqual(true);
    });

    it('isUrlFormat OK Pattern https', function() {
      expect(_sut.isUrlFormat("https://example.co.jp")).toEqual(true);
    });

    it('isUrlFormat NG Pattern', function() {
      expect(_sut.isUrlFormat("example.co.jp")).toEqual(false);
    });

    it('isHttps OK Pattern', function() {
      expect(_sut.isHttps("https://example.co.jp")).toEqual(true);
    });

    it('isHttps NG Pattern', function() {
      expect(_sut.isHttps("http://example.co.jp")).toEqual(false);
    });
  })
});
