'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_HOST: '"https://onebenefactor.powercode.pro"',
  API_NAMESPACE: '"api/v1"'
})
