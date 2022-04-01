const mongoose = require('mongoose')
const { sequence } = require('./plugins/index')
const { randomNumber } = require('@utils')
const bcrypt = require('bcrypt')
const { Buffer } = require('buffer')

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      trim: true,
      unique: [true]
    },
    password: {
      type: String,
      required: true,
      min: 6,
      trim: true
    },
    salt: {
      type: Buffer,
      default: null
    },
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date
    }
  },
  { versionKey: false }
)

schema.plugin(sequence, { inc_field: 'id' })

schema.pre('save', function (next) {
  const saltRound = randomNumber()
  this.password = bcrypt.hashSync(this.password, saltRound)
  this.salt = Buffer.from(saltRound.toString()).toString('base64')
  next()
})

const User = mongoose.model('user', schema)

module.exports = User
