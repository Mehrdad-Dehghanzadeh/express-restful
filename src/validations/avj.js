const Avj = require('avj')
const addFormats = require('ajv-formats')

const ajv = new Avj()
addFormats(ajv)

module.exports = ajv
