var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
    // js
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      include: path.join(__dirname, 'src'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    // CSS
    { 
      test: /\.s[ac]ss$/i,
      include: path.join(__dirname, 'src'),
      loader: 'style-loader!css-loader!sass-loader'
    }
    ]
  }
};
