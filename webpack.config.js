/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const buildDir = path.join(__dirname, 'assets')

dotenv.config()

module.exports = {
  entry: './src/index.tsx',
  output: { path: buildDir, filename: '[name].js' },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_SUPABASE_URL': JSON.stringify(
        process.env.REACT_APP_SUPABASE_URL
      ),
      'process.env.REACT_APP_SUPABASE_ANON_KEY': JSON.stringify(
        process.env.REACT_APP_SUPABASE_ANON_KEY
      ),
      'process.env.API_KEY_SID': JSON.stringify(process.env.API_KEY_SID),
      'process.env.API_KEY_SECRET': JSON.stringify(process.env.API_KEY_SECRET),
      'process.env.NODE_DEBUG': JSON.stringify(process.env.NODE_DEBUG || false)
    })
  ]
}
