export default class Jquery {
  /**
   * 空白の除去
   * 半角スペース/改行文字/タブ文字/全角空白を除去する
   *
   * Note
   * 標準のStringオブジェクトのtrimメソッドはInternet Explorerでは
   * バージョン9以降でしか利用できない
   *
   * @param {String} str
   * @returns {string}
   */
  trim(str) {
    return $.trim(str);
  }
}
