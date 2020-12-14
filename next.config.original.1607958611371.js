const withCSS = require('@zeit/next-css')
require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')

const withImages = require('next-images')

module.exports = withCSS(
  withImages({
    esModule: true,
    webpack(config) {
      config.resolve.alias['services'] = path.join(__dirname, 'services')
      config.resolve.alias['hooks'] = path.join(__dirname, 'hooks')
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })
      return config
    }
  })
)
