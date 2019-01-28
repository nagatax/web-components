var Validator = require('../../src/Validator/Url');

describe('Validator', () => {
  describe('Url', () => {
    /** {Validator.Url} */
    var _sut;

    /**
     * 初期化処理
     */
    beforeEach(() => {
      _sut = new Validator.Url();
    });

    /**
     * 事後処理
     */
    afterEach(() => {
      // pass
    });

    describe('isUrlFormat', () => {
      it('OK Pattern http', () => {
        expect(_sut.isUrlFormat('http://example.co.jp')).toEqual(true);
      });
      it('OK Pattern https', () => {
        expect(_sut.isUrlFormat('https://example.co.jp')).toEqual(true);
      });
      it('NG Pattern', () => {
        expect(_sut.isUrlFormat('example.co.jp')).toEqual(false);
      });
    });

    describe('isHttps', () => {
      it('OK Pattern', () => {
        expect(_sut.isHttps('https://example.co.jp')).toEqual(true);
      });
      it('NG Pattern', () => {
        expect(_sut.isHttps('http://example.co.jp')).toEqual(false);
      });
    });
  });
});
