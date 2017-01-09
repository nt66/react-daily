var webpack = require('webpack');
var path = require('path');

// console.log(path.resolve(__dirname, './build'));
module.exports = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, './js/app.js')],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 8181
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0']
    }]
  },
  resolve:{
    extensions:['','.js','.jsx','.less','.css']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};