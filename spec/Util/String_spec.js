import UtilString from '../../src/Util/String';

// jasmine-es6のロード
import install from 'jasmine-es6';

install();

describe('Stringクラスのテスト', () => {
  /** {Util.String} */
  const sut = new UtilString();

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

  describe('getLength関数のテスト', () => {
    it('OK Pattern', () => {
      expect(sut.getLength('良')).toEqual(1);
    });
    it('OK Pattern サロゲートペア', () => {
      expect(sut.getLength('𠮟る')).toEqual(2);
    });
    it('NG Pattern', () => {
      expect(sut.getLength(1)).toEqual(null);
    });
  });
});
