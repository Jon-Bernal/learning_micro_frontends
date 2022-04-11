const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container', // added for clarity
      remotes: { // Lists projects that the container can search for additional code
        // Loads the file listed at the URL if anything in container has an import like import <thing> from 'products' (see bootstrap.js for example)
        // These are looked for after searching the node_modules dir. These should probably be namespaced for the project, like guild_products or something similar to prevent collisions.
                  // name @ url for remote entry file
                  // This name comes from the webpack config in the product remote.
        products: 'products@http://localhost:8081/remoteEntry.js',
        cart: 'cart@http://localhost:8082/remoteEntry.js'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}