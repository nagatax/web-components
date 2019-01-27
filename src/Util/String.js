/**
 * @namespace
 */
var Util = Util || {};

/**
 * @constructor
 * @classdesc 文字列に関する処理
 */
Util.String = function () {};

Util.String.prototype = {

  /**
   * 文字数を取得する
   * @param {string} str
   * @return {number}
   */
  getLength(str) {
    if ((typeof str) !== 'string') { return null; }
    return str.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length;
  },
};

module.exports = Util;
