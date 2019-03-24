import ValidatorUrl from '../../src/Validator/Url';

// jasmine-es6のロード
import install from 'jasmine-es6';

install();

describe('Urlクラスのテスト', () => {
  /** {Validator.Url} */
  const sut = new ValidatorUrl();

  /**
   * 初期化処理
   */
  beforeEach(() => {
    // pass
  });

  /**
   * 事後処理
   */
  afterEach(() => {
    // pass
  });

  describe('isUrlFormat関数のテスト', () => {
    it('OK Pattern http', () => {
      expect(sut.isUrlFormat('http://example.co.jp')).toEqual(true);
    });
    it('OK Pattern https', () => {
      expect(sut.isUrlFormat('https://example.co.jp')).toEqual(true);
    });
    it('NG Pattern', () => {
      expect(sut.isUrlFormat('example.co.jp')).toEqual(false);
    });
  });

  describe('isHttps関数のテスト', () => {
    it('OK Pattern', () => {
      expect(sut.isHttps('https://example.co.jp')).toEqual(true);
    });
    it('NG Pattern', () => {
      expect(sut.isHttps('http://example.co.jp')).toEqual(false);
    });
  });
});
