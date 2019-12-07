module.exports = class Math {
  /**
   * 階乗を算出する
   *
   * @param n
   * @returns {number|undefined}
   */
  factorial(n) {
    if (n >= 2) {
      return n * this.factorial(n - 1);
    } else if (n === 1) {
      return 1;
    }

    // 入力値がマイナスまたは無効値の場合
    return undefined;
  }
}
