var path = require('path')
var vuxLoader = require("vux-loader");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpackConfig = {
  entry: {
    build:'./src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders:{
              css:ExtractTextPlugin.extract({
                use:['css-loader','autoprefixer-loader'],
                fallback:'vue-style-loader'
              }),
              less:ExtractTextPlugin.extract({
                use:['css-loader', 'autoprefixer-loader','less-loader'],
                fallback:'vue-style-loader'
              }),
            }
          }
      },
      {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
              use:['css-loader','autoprefixer-loader'],
              fallback: 'style-loader'
          })
      },
      {
          test: /\.less$/,
          loader:ExtractTextPlugin.extract({
            use: ['less-loader','autoprefixer-loader'],
            fallback: 'style-loader' //'style-loader!css-loader!less-loader'
          })
      },
      {
          test: /\.(eot|woff|woff2|ttf)$/,
          loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      },
      {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new ExtractTextPlugin('build.css')
  ]
};

module.exports = vuxLoader.merge(webpackConfig, {plugins:['vux-ui']});

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })/*,
    new ExtractTextPlugin({
       filename:'[name][hash:8].css',
       allChunks: true
    })*/
  ])
}
