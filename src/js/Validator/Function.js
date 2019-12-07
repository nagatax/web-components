module.exports = class Function {
  /**
   * 関数の引数チェック
   * 引数の必須項目のデフォルト値として設定する
   *
   * @example
   * function( requiredValue = required(), notRequiredValue = undefined) {}
   */
  required() {
    throw new Error('引数が不足しています');
  }
}
