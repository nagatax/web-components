import UtilMath from '../../src/Util/Math';

// jasmine-es6のロード
import install from 'jasmine-es6';
install();

describe('Mathクラスのテスト', () => {
  /** {Util.Math} */
  const sut = new UtilMath();

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

  describe('factorial関数のテスト', () => {
    it('OK Pattern 5の階乗は120になること', () => {
      expect(sut.factorial(5)).toEqual(120);
    });
    it('OK Pattern 1の階乗は1になること', () => {
      expect(sut.factorial(1)).toEqual(1);
    });
    it('NG Pattern 負の数の階乗はNULLになること', () => {
      expect(sut.factorial(-1)).toBeUndefined();
    });
  });
});
