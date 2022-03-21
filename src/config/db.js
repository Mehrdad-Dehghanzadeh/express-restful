const mongoose = require('mongoose')

const dbUri = `${process.env.DATABASE_URI}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`

function conenctDB(callback) {
  mongoose
    .connect(dbUri, {})
    .then(() => {
      console.log('\x1b[32mConencted to Database', '\x1b[0m')
      callback()
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = conenctDB
