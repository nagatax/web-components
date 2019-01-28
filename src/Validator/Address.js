/**
 * @namespace
 */
var Validator = Validator || {};

/**
 * @constructor
 * @classdesc 住所のバリデーション
 */
Validator.Address = function () {};

Validator.Address.prototype = {

  /**
   * 郵便番号か判定する
   * @param {string} postCode
   * @return {boolean}
   */
  isValidPostCode(postCode) {
    // check input value
    if (postCode === undefined) { return false; }

    // 正規表現リテラル
    return (/[0-9]{3}-[0-9]{4}/).test(postCode);
  },
};

module.exports = Validator;
