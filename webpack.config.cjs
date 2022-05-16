// @ts-check

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
  output: {
    path: path.join(__dirname, 'dist', 'public'),
    publicPath: '/assets/',
  },
  devServer: {
    compress: true,
    port: 8090,
    host: '0.0.0.0',
    // publicPath: '/assets/',
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new SpriteLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'url-loader',
        include: path.resolve(__dirname, 'src/assets/images'),
        options: {
          limit: 512,
          name: 'assets/images/[name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src/assets/icons'),
        use: [
          'svg-sprite-loader',
          'svgo-loader',
        ],
      },
    ],
  },
};
