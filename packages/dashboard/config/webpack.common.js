const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  module: {
    rules: [
      {
        // add ability to load assets of different types
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [{ loader: "file-loader" }],
      },
      // add ability to handle vue files
      { test: /\.vue$/, use: "vue-loader" },
      {
        // add ability to handle scss and css files
        test: /\.scss|\.css$/,
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"],
      },
      // Add loaders
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // compiles JS down to es5
            plugins: ["@babel/plugin-transform-runtime"], // enables async await support
          },
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()]
};
