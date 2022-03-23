const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const schema = new mongoose.Schema({
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
    min: 6,
    trim: true
  }
})

schema.pre('create', async function (next) {
  const user = this
  user.password = await bcrypt.hash(user.password, 6)
  next()
})

const User = mongoose.model('user', schema)

module.exports = User
