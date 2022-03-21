const avj = require('./avj')

const schema = {
  type: Object,
  properties: {
    email: { type: 'string', format: 'email' },
    name: { type: 'string' },
    password: { type: 'string' }
  },

  required: ['email', 'name', 'password']
}

module.exports = schema.compile(avj)
