const path = require('path')
const { isDev } = require('../utils/utils')

const config = {
    port: isDev ? 1819 : 80,
    mode: process.env.MODE,
    srcDir: path.resolve(__dirname, '../'),
    rootDir: path.resolve(__dirname, '../../'),
    publicDir() {
       return path.resolve(this.rootDir, './public')
    }
}

module.exports = config
