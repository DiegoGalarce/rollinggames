const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
 
module.exports = {
  entry: {
      index: './src/js/index.js',
      admin: './src/js/admin.js',
      registro: './src/js/registro.js',
    contacto: './src/js/contacto.js'},
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
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: 'img/[name].[ext]',
             },
          },
        ],
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
        chunks: ['contacto'],
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
        chunks: ['registro'],
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
    new HtmlWebpackPlugin({
      template: './src/detallejuegodos.html',
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
      filename: './detallejuegodos.html'
  }),
  new HtmlWebpackPlugin({
    template: './src/detallejuegotres.html',
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
    filename: './detallejuegotres.html'
}),
    new MiniCssExtractPlugin({
        filename: 'css/style.css'
    }),
    new CopyWebpackPlugin({
        patterns: [
          {
            from: './src/img',
            to: 'img',
          },
         
        ]
    })

],
};