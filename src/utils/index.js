const process = require('process')

/***
 *  Modes
 ************************/
const isDev = process.env.mode == 'development'
const isProduction = process.env.mode == 'production'

/*
 * Random Number
 ****************************/
function randomNumber(num = 1) {
  return Math.random() * 10 ** num
}

module.exports = { isDev, isProduction, randomNumber }
