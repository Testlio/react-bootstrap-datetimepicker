var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var plugins = [
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  }),
  new ExtractTextPlugin('react-bootstrap-datetimepicker.css', { allChunks: true })
]

if (process.env.COMPRESS) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
} 

module.exports = {

  entry: ["./src/DateTimeField.js"],

  output: {
    path: path.join(__dirname, "/dist/"),
    library: "ReactBootstrapDatetimepicker",
    libraryTarget: "umd"
  },

  resolve: {
    extensions: ["", ".js"]
  },

  externals: {
    "react": "React",
    "react/addons": "React",
    "react-bootstrap": "ReactBootstrap",
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

  plugins: plugins
};
