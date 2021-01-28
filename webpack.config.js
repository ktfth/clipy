const pkg = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const ClosurePlugin = require('closure-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

const banner = `clipy v${pkg.version}
https://ktfth.github.io/clipy

Licensed MIT`;

module.exports = {
  entry: './src/clipy.js',
  mode: 'production',
  output: {
    filename: production ? 'clipy.min.js' : 'clipy.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'clipy',
    globalObject: 'this',
    libraryExport: 'default',
    libraryTarget: 'window',
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  optimization: {
    minimizer: [new ClosurePlugin({ mode: 'STANDARD' }, {})],
  },
  plugins: [new webpack.BannerPlugin({ banner })],
};
