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
    return (/\d{3}-\d{4}/).test(postCode);
  },
  /**
   * 日付の形式か判定する
   * yyyy/mm/dd形式か判定
   * @param {string} postCode
   * @return {boolean}
   */
  isValidDateUsingSlash(date) {
    // check input value
    if (date === undefined) { return false; }

    // 正規表現リテラル
    return (/\d{4}\/\d{1,2}\/\d{1,2}/).test(date);
  },
  /**
   * 日付の形式か判定する
   * yyyy-mm-dd形式か判定
   * @param {string} postCode
   * @return {boolean}
   */
  isValidDateUsingHyphen(date) {
    // check input value
    if (date === undefined) { return false; }

    // 正規表現リテラル
    return (/\d{4}-\d{1,2}-\d{1,2}/).test(date);
  },
  /**
   * 日付の形式か判定する
   * yyyy.mm.dd形式か判定
   * @param {string} postCode
   * @return {boolean}
   */
  isValidDateUsingDot(date) {
    // check input value
    if (date === undefined) { return false; }

    // 正規表現リテラル
    return (/\d{4}\.\d{1,2}\.\d{1,2}/).test(date);
  },
};

module.exports = Validator;
