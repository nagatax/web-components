// Set current path
const path = require('path');
// Clean up files in output's folder
const CleanWebpackPlugin = require('clean-webpack-plugin');
// Create some html files
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Separate some css files
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Check some scss files
const StyleLintPlugin = require('stylelint-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
  optimization: {
    minimizer: [
      new TerserPlugin({}),
      new OptimizeCssAssetsPlugin({}),
    ],
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
      // Sassの設定
      // sass-loader: Sassのコンパイル
      // -> css-loader: モジュール化
      // -> style-loader: ページに組み込む
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      // Imageの設定
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
    new CleanWebpackPlugin(
      ['dist'],
      {
        root: path.resolve(__dirname, '../'),
        exclude: ['img'],
      },
    ),
    new MiniCssExtractPlugin({
      filename: 'style-[hash].css',
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
    }),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: 'index.html',
    }),
  ],
};
