const {merge} = require('webpack-merge'); // merges webpack.common with webpack.dev
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json');

const port = 8082

const devConfig = {
  mode: 'development',
  output: {// This is important for local dev
    publicPath: `http://localhost:${port}/` // must have / at the end
  },
  devServer: {
    port: port,
    historyApiFallback: {
      index: 'index.html'
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/bootstrap'
      },
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

// devConfig coming second means it overides things in commonConfig
module.exports = merge(commonConfig, devConfig);

