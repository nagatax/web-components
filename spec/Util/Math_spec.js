var Validator = require('../../src/Util/Math');

describe('Validator', () => {
  describe('String', () => {
    /** {Util.Math} */
    var _sut;

    /**
     * 初期化処理
     */
    beforeEach(() => {
      _sut = new Validator.Math();
    });

    /**
     * 事後処理
     */
    afterEach(() => {
      // pass
    });

    describe('factorial', () => {
      it('OK Pattern 5の階乗は120になること', () => {
        expect(_sut.factorial(5)).toEqual(120);
      });
      it('OK Pattern 1の階乗は1になること', () => {
        expect(_sut.factorial(1)).toEqual(1);
      });
      it('NG Pattern 負の数の階乗はNULLになること', () => {
        expect(_sut.factorial(-1)).toBeNull();
      });
    });
  });
});
