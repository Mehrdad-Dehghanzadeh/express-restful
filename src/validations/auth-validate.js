const ajv = require('./ajv')

const signUpSchema = {
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email' },
    name: { type: 'string' },
    password: { type: 'string', minLength: 6 },
    confirmPassword: {
      type: 'string',
      const: {
        $data: '1/password'
      }
    }
  },

  additionalProperties: false,

  required: ['email', 'name', 'password', 'confirmPassword']
}

module.exports = { signUp: ajv.compile(signUpSchema) }
