const ajv = require('./ajv')

const signUpSchema = {
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email' },
    name: { type: 'string' },
    password: { type: 'string', minLength: 6 }
  },

  additionalProperties: false,

  required: ['email', 'name', 'password']
}

module.exports = { signUp: ajv.compile(signUpSchema) }
