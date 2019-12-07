const ValidatorAddress = require('../../src/js/Validator/Address');

// load jasmine module
require('jasmine-es6');

describe('Addressクラスのテスト', () => {
  /** {Validator.Address} */
  const sut = new ValidatorAddress();

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

  describe('isValidPostCode関数のテスト', () => {
    it('OK Pattern', () => {
      expect(sut.isValidPostCode('123-4567')).toEqual(true);
    });
    it('NG Pattern', () => {
      expect(sut.isValidPostCode('abc-defg')).toEqual(false);
    });
  });

  describe('isValidDateUsingSlash関数のテスト', () => {
    it('OK Pattern', () => {
      expect(sut.isValidDateUsingSlash('2019/01/28')).toEqual(true);
    });
    it('NG Pattern', () => {
      expect(sut.isValidDateUsingSlash('2019-01-28')).toEqual(false);
    });
  });

  describe('isValidDateUsingHyphen関数のテスト', () => {
    it('OK Pattern', () => {
      expect(sut.isValidDateUsingHyphen('2019-01-28')).toEqual(true);
    });
    it('NG Pattern', () => {
      expect(sut.isValidDateUsingHyphen('2019.01.28')).toEqual(false);
    });
  });

  describe('isValidDateUsingDot関数のテスト', () => {
    it('OK Pattern', () => {
      expect(sut.isValidDateUsingDot('2019.01.28')).toEqual(true);
    });
    it('NG Pattern', () => {
      expect(sut.isValidDateUsingDot('2019/01/28')).toEqual(false);
    });
  });
});
