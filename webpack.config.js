var path = require('path');

var serverConfig = {
  mode: 'development', 
  target: 'node',
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',                
        exclude: /node_modules/
      }      
    ]
  }
};

var clientConfig = {
  mode: 'development',
  target: 'web', // <=== can be omitted as default is 'web'
  entry: './src/ui/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',                
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};

module.exports = [ serverConfig, clientConfig ];