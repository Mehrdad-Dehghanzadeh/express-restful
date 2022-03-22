const config = require('@config/app-config')

function CheckApiVersion(req, res, next) {
  if (config.apiVersion == req.headers['api-version']) {
    next()
  } else {
    res.status(400).send('api-version is required')
  }
}

module.exports = CheckApiVersion
