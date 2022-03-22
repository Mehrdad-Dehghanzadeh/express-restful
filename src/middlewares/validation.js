const { pick } = require('@utils/object')

function validation(validate, reqProp = 'body') {
  return (req, res, next) => {
    const data = pick(req, ['params', 'query', 'body'])

    if (validate(data[reqProp])) {
      next()
    } else {
      const errors = validate.errors.map(
        ({ instancePath, message, keyword }) => ({
          property: instancePath.substring(1),
          reason: keyword,
          message
        })
      )

      res.status(400).send(errors)
    }
  }
}

module.exports = validation
