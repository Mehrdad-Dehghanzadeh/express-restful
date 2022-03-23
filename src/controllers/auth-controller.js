const User = require('@models/user')

function signUp(req, res, next) {
  User.create(req.body)
    .then((data) => {
      res.status(201).send(data)
    })
    .catch((error) => {
      console.log(error)
      next()
    })
}

module.exports = {
  signUp
}
