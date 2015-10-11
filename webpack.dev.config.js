var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // 'only' prevents reload on syntax errors
    './dev/index.js'
  ],

  output: {
    path: path.join(__dirname, '/dev'),
    filename: 'example-app.js',
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: 'example-app.map',
    assetPath: '/'
  },

  resolve: {
    alias: {
      'datetimepicker': '../src/DateTimeField'
    },
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      { 
        test: /\.js?$/, 
        exclude: /node_modules/,
        loaders: [ 'react-hot' ,'babel-loader' ] 
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        )
      },
    ]
  },

  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('app.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/dev/index.html')
     })
  ]

};
