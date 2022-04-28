/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./webpack.config')
const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = merge(baseConfig, {
  output: {
    chunkFilename: '[name].[fullhash:8].bundle.js',
    filename: '[name].[fullhash:8].bundle.js',
    publicPath: '/'
  },
  mode: 'production',
  plugins: [
    ...(process.env.NODE_ENV === 'development'
      ? [new BundleAnalyzerPlugin()]
      : [])
  ]
})
