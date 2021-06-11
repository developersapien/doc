const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const package = require('../package.json').dependencies
const path = require('path')
module.exports = {
  mode: 'development',
  devServer: {
    host: 'localhost',
    hot: true,
    port: 3002,
    open: true,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'shell.bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        users: 'users@http://localhost:3001/remoteEntry.js',
      },
      shared: {
        ...package,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: package.react,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: package['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          eager: true,
          requiredVersion: package['react-router-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      hash: false,
      filename: './index.html',
      template: './src/index.html',
      title: 'Development',
      inject: true,
    }),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('dev'),
    }),
  ],
}
