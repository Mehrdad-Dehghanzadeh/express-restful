const process = require('process')

/***
 *  Modes
 ************************/
const isDev = process.env.mode == 'development'
const isProduction = process.env.mode == 'production'

module.exports = { isDev, isProduction }
