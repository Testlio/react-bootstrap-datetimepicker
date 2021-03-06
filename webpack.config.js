var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: ["./src/DateTimeField.js"],

  output: {
    path: path.join(__dirname, "/dist/"),
    library: "react-bootstrap-datetimepicker",
    filename: "react-bootstrap-datetimepicker.js",
    libraryTarget: "umd"
  },

  resolve: {
    extensions: ["", ".js"]
  },

  externals: {
    "react": "react",
    "react-bootstrap": "react-bootstrap",
    "react-dom": "react-dom",
    "moment": "moment"
  },

  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        )
      },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin('styles.css', { allChunks: true })
  ]
};
