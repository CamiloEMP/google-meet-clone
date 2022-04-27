/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./webpack.config')
const { merge } = require('webpack-merge')

module.exports = merge(baseConfig, {
  output: {
    filename: '[fullhash].js'
  },
  mode: 'production'
})
