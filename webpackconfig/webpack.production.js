// マージする設定ファイルをインポート
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  // 実行モード
  // productionモードで圧縮
  // (optimization-minimizer)を有効化
  mode: 'production',
  module: {
    rules: [],
  },
  // ソースマップの生成
  devtool: 'source-map',
  // 圧縮にかかわる設定
  optimization: {
    minimizer: [],
  },
  plugins: [],
});
