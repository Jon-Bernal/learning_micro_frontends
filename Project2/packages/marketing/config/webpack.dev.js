const {merge} = require('webpack-merge'); // merges webpack.common with webpack.dev
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

// devConfig coming second means it overides things in commonConfig
module.exports = merge(commonConfig, devConfig);

