const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
      index: './src/js/index.js',
      admin: './src/js/admin.js',
      registro: './src/js/registro.js',
    contacto: './src/js/contacto.js',
    infoJuegos: './src/js/infoJuegos.js',
    detalleJuego: './src/js/detalleJuegos.js',
    login: './src/js/login.js'},
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
        chunks: ['login'],
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
        template: './src/juegoplataformauno.html',
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
        filename: './juegoplataformauno.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/juegoaccionuno.html',
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
      filename: './juegoaccionuno.html'
  }),
  new HtmlWebpackPlugin({
    template: './src/juegoaventurauno.html',
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
    filename: './juegoaventurauno.html'
}),
new HtmlWebpackPlugin({
  template: './src/juegocarrerauno.html',
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
  filename: './juegocarrerauno.html'
}),
new HtmlWebpackPlugin({
  template: './src/juegoestrategiauno.html',
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
  filename: './juegoestrategiauno.html'
}),
new HtmlWebpackPlugin({
  template: './src/rollinggames.html',
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
  filename: './rollinggames.html'
}),
new HtmlWebpackPlugin({
  template: './src/infoJuegos.html',
  minify:{
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true
  },
  inject: true,
  chunks: ['detalleJuego'],
  filename: './infoJuegos.html'
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