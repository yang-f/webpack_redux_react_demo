var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      },
    }),
    new HtmlWebpackPlugin({
      filename:'./index.html',
      template:'./app/templates/index.tpl',
      inject:true,
      hash:true,
      minify:{
        removeComments:true,
        collapseWhitespace:true
      }
    }),
    new FaviconsWebpackPlugin('./app/images/favicon.png')
  ],
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'yangf.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',query: {presets:['react','es2015','stage-0']}},
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less/,loader: 'style-loader!css-loader!less-loader'},
      { test: /\.png$/, loader: "url-loader?limit=32768&name=images/[hash:8].[name].[ext]" },
      { test: /\.woff/,loader : 'url?name=font/[hash:8].[name].[ext]&prefix=font/&limit=10000&mimetype=application/font-woff'},
      { test: /\.ttf/,loader : 'url?name=font/[hash:8].[name].[ext]&prefix=font/'},
      { test: /\.eot/,loader : 'url?name=font/[hash:8].[name].[ext]&prefix=font/'},
      { test: /\.svg/,loader : 'url?name=font/[hash:8].[name].[ext]&prefix=font/'},
    ]
  }
};
