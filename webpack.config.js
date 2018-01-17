var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require("path");


module.exports = {
  context: path.join(__dirname, "/src"),
  entry:'./js/index.js',
  output:{
      publicPath: __dirname + "/static/",
      path: __dirname + "/static/",
      filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query:{
          presets:['react','es2015']
        }
      }, {
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader'})
    }]
  },
  plugins: [new ExtractTextPlugin('style.css')],
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
}
