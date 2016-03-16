import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const DEV = process.env['PROD_DEV'] && process.env['PROD_DEV'] != '0' ? true : false;

module.exports = {
  entry: {
    index:  ['webpack/hot/dev-server', './src/index.js'],
    ...(DEV && {playground: ['webpack/hot/dev-server', './server/playground.js']})
  },

  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    publicPath: 'http://localhost:3010/'
  },

  devServer: {
    contentBase: './'
  },

  devtool: DEV ? 'source-map' : false,

  module: {
    /*preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],*/
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loaders: [...(DEV && ['react-hot']), 'babel-loader']
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),

    ...(DEV && [
      new HtmlWebpackPlugin()
    ])
  ],

  eslint: {
    configFile: './.eslintrc'
  }
};
