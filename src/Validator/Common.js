export default class Common {
  /**
   * 文字列にパターンが含まれるか判定する
   * @param {string} str
   * @param {string} pattern
   * @return {boolean}
   */
  isContainString(str, pattern) {
    // check input value
    if (str === undefined) { return false; }
    if (pattern === undefined) { return false; }

    // 正規表現リテラル
    return (new RegExp(pattern)).test(str);
  }
}
