const webpack = require('webpack')
const path = require('path')

const config = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'rcolor.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin()
  ]

  Object.assign(config.output, {
    filename: 'rcolor.min.js',
    library: 'rcolor',
    libraryTarget: 'var'
  })
}

module.exports = config
