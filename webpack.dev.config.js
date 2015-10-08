var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // 'only' prevents reload on syntax errors
    './examples/basic/basic.js'
  ],

  output: {
    path: path.join(__dirname, '/examples'),
    filename: 'basic.js',
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: 'basic.map',
    assetPath: '/'
  },

  resolve: {
    alias: {
      'react-bootstrap-datetimepicker': '../src/DateTimeField'
    },
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      { 
        test: /\.js?$/, 
        exclude: /node_modules/,
        loaders: [ 'babel-loader' ] 
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        )
      },
    ]
  },

  devServer: {
    contentBase: 'examples/',
    stats: {colors: true}
  },

  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('app.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/examples/basic/index.html')
     })
  ]

};
