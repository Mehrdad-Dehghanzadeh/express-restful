const path = require('path')
const { isDev } = require('@utils')

const config = {
    port: isDev ? 1819 : 80,
    mode: process.env.MODE,
    apiVersion: process.env.API_VERSION,
    srcDir: path.resolve(__dirname, '../'),
    rootDir: path.resolve(__dirname, '../../'),
    publicDir() {
       return path.resolve(this.rootDir, './public')
    }
}

module.exports = config
