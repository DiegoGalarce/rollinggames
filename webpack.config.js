const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 
module.exports = {
  entry: {
      index: './src/js/index.js',
      admin: './src/js/admin.js'},
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }

    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
        template: './src/index.html',
        minify:{
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        },
        inject: true,
        chunks: ['index']
    }),
    new HtmlWebpackPlugin({
        template: './src/admin.html',
        minify:{
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        },
        inject: true,
        chunks: ['admin'],
        filename: './admin.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/404.html',
        minify:{
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        },
        inject: true,
        chunks: ['admin'],
        filename: './404.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/contacto.html',
        minify:{
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        },
        inject: true,
        chunks: ['admin'],
        filename: './contacto.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/login.html',
        minify:{
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        },
        inject: true,
        chunks: ['admin'],
        filename: './login.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/nosotros.html',
        minify:{
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        },
        inject: true,
        chunks: ['admin'],
        filename: './nosotros.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/registro.html',
        minify:{
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        },
        inject: true,
        chunks: ['admin'],
        filename: './registro.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/detallejuego.html',
        minify:{
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        },
        inject: true,
        chunks: ['admin'],
        filename: './detallejuego.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'css/style.css'
    })
],
};


