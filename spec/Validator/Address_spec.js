var Validator = require('../../src/Validator/Address');

describe('Validator', () => {
  describe('Address', () => {
    /** {Validator.Address} */
    var _sut;

    /**
     * 初期化処理
     */
    beforeEach(() => {
      _sut = new Validator.Address();
    });

    /**
     * 事後処理
     */
    afterEach(() => {
      // pass
    });

    describe('isValidPostCode', () => {
      it('OK Pattern', () => {
        expect(_sut.isValidPostCode('123-4567')).toEqual(true);
      });
      it('NG Pattern', () => {
        expect(_sut.isValidPostCode('abc-defg')).toEqual(false);
      });
    });

    describe('isValidDateUsingSlash', () => {
      it('OK Pattern', () => {
        expect(_sut.isValidDateUsingSlash('2019/01/28')).toEqual(true);
      });
      it('NG Pattern', () => {
        expect(_sut.isValidDateUsingSlash('2019-01-28')).toEqual(false);
      });
    });

    describe('isValidDateUsingHyphen', () => {
      it('OK Pattern', () => {
        expect(_sut.isValidDateUsingHyphen('2019-01-28')).toEqual(true);
      });
      it('NG Pattern', () => {
        expect(_sut.isValidDateUsingHyphen('2019.01.28')).toEqual(false);
      });
    });

    describe('isValidDateUsingDot', () => {
      it('OK Pattern', () => {
        expect(_sut.isValidDateUsingDot('2019.01.28')).toEqual(true);
      });
      it('NG Pattern', () => {
        expect(_sut.isValidDateUsingDot('2019/01/28')).toEqual(false);
      });
    });
  });
});
