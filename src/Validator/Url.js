/**
 * @namespace
 */
var Validator = Validator || {};

/**
 * @constructor
 * @classdesc URLのバリデーション
 */
Validator.Url = function () {};

Validator.Url.prototype = {

  /**
   * httpsのURLか判定する
   * @param {string} url
   * @return {boolean}
   */
  isHttps(url) {
    // check input value
    if (url === undefined) { return false; }

    // 正規表現リテラル
    return /^https/.test(url);
  },
};

module.exports = Validator;
