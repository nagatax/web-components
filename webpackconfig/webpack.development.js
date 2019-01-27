// マージする設定ファイルをインポート
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  // 実行モード
  mode: 'development',
  module: {
    rules: [],
  },
  // 開発サーバーの設定
  devServer: {
    contentBase: './dist',
  },
  // ソースマップの生成
  devtool: 'eval-source-map',
  plugins: [],
});
