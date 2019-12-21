// Set current path
const path = require('path');
// Clean up files in output's folder
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // エントリーポイント
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    // 出力先のフォルダ
    path: path.resolve(__dirname, '../dist'),
    // 出力先のファイル名
    filename: '[name]-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          // ESLintの設定
          {
            loader: 'eslint-loader',
            options: {
              // autofixモード
              fix: false,
              // エラー検出時にビルドを中断
              failOnError: false,
            },
          },
          // Babelによるトランスコンパイル設定
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', { modules: false }],
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(
      ['dist'],
      {
        root: path.resolve(__dirname, '../'),
        exclude: ['html', 'css', 'img'],
      },
    ),
  ],
};
