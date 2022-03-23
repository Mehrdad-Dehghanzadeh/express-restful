const ajv = require('./ajv')

function isEmail(val) {
  const schema = {
    type: 'string',
    format: 'email'
  }
  const validate = ajv.validateSchema(schema)

  return validate(val)
}

module.exports = {
  isEmail
}
