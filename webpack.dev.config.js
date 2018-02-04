const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        include: path.resolve(__dirname, 'src'), 
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ['babel-loader?cacheDirectory=true']
      },
      { 
        test: /\.css$/, 
        use: [
          'style-loader', 
          { 
            loader: 'css-loader', 
            options: { importLoaders: 1 } 
          }, 
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('autoprefixer')()
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', 
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('autoprefixer')()
              ]
            }
          },
          'less-loader'
        ]
      },
      { 
        test:/\.(png|gif|jpg|jpeg|bmp)$/, 
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    })
  ],
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      components: path.join(__dirname, 'src/components'),
      router: path.join(__dirname, 'src/router'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reducers: path.join(__dirname, 'src/redux/reducers'),
    }
  },
  devServer: {
    port: 8000,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0'
  }
}
