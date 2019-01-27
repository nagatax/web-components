// CSSを別ファイルで組み込む
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 出力先フォルダーのクリーンアップ
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // エントリーポイント
  entry: `${__dirname}/../src/index.js`,
  output: {
    // 出力先のフォルダ
    path: `${__dirname}/../dist`,
    // 出力先のファイル名
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          // Babelによるトランスコンパイル設定
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', { 'modules': false }],
              ],
            },
          },
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
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ use: 'css-loader' }),
      },
      // Sassの設定
      // sass-loader: Sassのコンパイル
      // -> css-loader: モジュール化
      // -> style-loader: ページに組み込む
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(gif|png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 51200,
              name: './images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    // new CleanWebpackPlugin('[dist]'),
  ],
};
