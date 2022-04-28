/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')
const webpack = require('../webpack.config')

const buildDir = webpack.output.path
const assetDir = path.join(buildDir, 'assets')

if (!fs.existsSync(assetDir)) {
  fs.mkdirSync(assetDir)
  fs.cpSync(
    path.join(buildDir, 'index.html'),
    path.join(assetDir, 'index.html')
  )
}
