var Validator = require('../../src/Util/String');

describe('Validator', () => {
  describe('String', () => {
    /** {Util.String} */
    var _sut;

    /**
     * 初期化処理
     */
    beforeEach(() => {
      _sut = new Validator.String();
    });

    /**
     * 事後処理
     */
    afterEach(() => {
      // pass
    });

    describe('getLength', () => {
      it('OK Pattern', () => {
        expect(_sut.getLength('良')).toEqual(1);
      });
      it('OK Pattern サロゲートペア', () => {
        expect(_sut.getLength('𠮟る')).toEqual(2);
      });
      it('NG Pattern', () => {
        expect(_sut.getLength(1)).toEqual(null);
      });
    });
  });
});
