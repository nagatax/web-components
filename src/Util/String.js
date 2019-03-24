export default class String {
  /**
   * 文字数を取得する
   * @param {string} str
   * @return {number}
   */
  getLength(str) {
    if ((typeof str) !== 'string') {
      return null;
    }
    return str.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length;
  }
}
