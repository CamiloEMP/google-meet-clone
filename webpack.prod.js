/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./webpack.config')
const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(baseConfig, {
  output: {
    chunkFilename: '[name].[fullhash:8].bundle.js',
    filename: '[name].[fullhash:8].bundle.js',
    publicPath: '/'
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    ...(process.env.NODE_ENV === 'development'
      ? [new BundleAnalyzerPlugin()]
      : [])
  ]
})
