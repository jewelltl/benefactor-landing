var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_HOST: '"https://onebenefactor.powercode.pro"',
  API_NAMESPACE: '"api/v1"'
})
