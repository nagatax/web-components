var Validator = require('../../src/Validator/Common');

describe('Validator', () => {
  describe('Common', () => {
    /** {Validator.Common} */
    var _sut;

    /**
     * 初期化処理
     */
    beforeEach(() => {
      _sut = new Validator.Common();
    });

    /**
     * 事後処理
     */
    afterEach(() => {
      // pass
    });

    describe('isContainString', () => {
      it('OK Pattern pre', () => {
        expect(_sut.isContainString('javascript', 'java')).toEqual(true);
      });
      it('OK Pattern middle', () => {
        expect(_sut.isContainString('javascript', 'vasc')).toEqual(true);
      });
      it('OK Pattern post', () => {
        expect(_sut.isContainString('javascript', 'script')).toEqual(true);
      });
      it('NG Pattern', () => {
        expect(_sut.isContainString('javascript', 'bad string')).toEqual(false);
      });
    });
  });
});
