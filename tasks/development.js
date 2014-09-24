var gulp    = require('gulp')
  , config = require('./webpack.config').development
  , WebpackDevServer = require("webpack-dev-server")
  , webpack = require('webpack');

module.exports = {

  devServer: function() {
    new WebpackDevServer(webpack(config), {
      publicPath: config.output.publicPath,
      stats: { colors: true },
      hot: true
    }).listen(3000, "localhost");

  }

};

