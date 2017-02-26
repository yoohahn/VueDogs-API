var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

var NODE_FOLDER = path.join(__dirname, 'node_modules');
var DIST_FOLDER = path.join(__dirname, './dist');
var SRC_FOLDER = path.join(__dirname, './src');
var PROD = process.env.NODE_ENV === 'production';

var cssStyleTagExtract = new ExtractTextPlugin({
  filename: 'static/css/[name].css?[chunkhash]',
  allChunks: true
});

var vueLoaders = PROD ? {
    css: cssStyleTagExtract.extract({
      loader: 'css-loader?importLoaders=1!postcss-loader',
      fallbackLoader: 'vue-style-loader'
    })
  } : [];

var externalCssFilesExtract = new ExtractTextPlugin({
  filename: 'static/css/reset.css?[chunkhash]',
  allChunks: true
});

module.exports = {
  entry: './src/main.js',
  output: {
    path: DIST_FOLDER,
    publicPath: PROD ? '' : '/', // / is needed for dev to work
    filename: PROD ? 'static/js/[name].min.js?[chunkhash]' : '[name].js',
    jsonpFunction: 'vueDogsApiJSONP'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: vueLoaders
          // other vue-loader options go here
        }
      },
      {
        test: /\.css$/,
        use: externalCssFilesExtract.extract({
          loader: 'css-loader?importLoaders=1!postcss-loader'
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'static/[name].[ext]?[hash:base64:5]'
        }
      }
    ]
  },
  plugins: [
    cssStyleTagExtract,
    externalCssFilesExtract,
    new CopyWebpackPlugin([{
      from: path.join(NODE_FOLDER, 'punkapi-server/images/v2'),
      to: path.join(DIST_FOLDER, 'images/v2')
    }]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: PROD ? '"production"' : '"development"'
      },
      __DEV__: !PROD
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false
      },
      chunksSortMode: 'dependency'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, 'node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // Extract webpack runtime manifest from vendor to avoid chunkhash
      // changing on editing the app
      name: 'manifest',
      chunks: ['vendor']
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (PROD) {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
