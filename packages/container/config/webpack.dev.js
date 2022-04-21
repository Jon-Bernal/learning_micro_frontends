const {merge} = require('webpack-merge'); // merges webpack.common with webpack.dev
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json');

const port = 8080

const devConfig = {
  mode: 'development',
  output: {// This is important for local dev
    publicPath: `http://localhost:${port}/` // must have / at the end
  },
  devServer: {
    port: port,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
        auth: 'auth@http://localhost:8082/remoteEntry.js',
        dashboard: 'dashboard@http://localhost:8083/remoteEntry.js'
      },
      shared: packageJson.dependencies
    })
  ]
}

// devConfig coming second means it overides things in commonConfig
module.exports = merge(commonConfig, devConfig);

