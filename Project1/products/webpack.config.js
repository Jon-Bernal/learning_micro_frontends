const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/bootstrap'
      },
      shared: ['faker'] // shares dependency with container and other federated remotes so you don't download them twice
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ]
}