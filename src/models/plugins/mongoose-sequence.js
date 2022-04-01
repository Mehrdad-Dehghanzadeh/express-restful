const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

module.exports = AutoIncrement
