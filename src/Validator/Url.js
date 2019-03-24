export default class Url {
  /**
   * URLの形式か判定する
   * @param {string} url
   * @return {boolean}
   */
  isUrlFormat(url) {
    // check input value
    if (url === undefined) {
      return false;
    }

    return (/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/).test(url);
  }

  /**
   * httpsのURLか判定する
   * @param {string} url
   * @return {boolean}
   */
  isHttps(url) {
    // check input value
    if (url === undefined) {
      return false;
    }

    // 正規表現リテラル
    return (/^https/).test(url);
  }
}
