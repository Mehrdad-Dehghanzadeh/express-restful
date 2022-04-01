const User = require('@models/user')
const { pick } = require('@utils/object')

function hasEmail(req, res, next) {
  const email = pick(req.body, ['email'])
  User.findOne(email)
    .then((data) => {
      if (!!data) {
        res.status(400).json({ message: 'ایمیل قبلا ثبت شده است' })
      } else {
        next()
      }
    })
    .catch((error) => {
      console.error(error)
      res.sendStatus(500)
    })
}

function signUp(req, res) {
  const user = new User(req.body)
  user
    .save()
    .then((data) => {
      const responseData = pick(data, ['email', 'name', 'id', 'sds'])
      res.status(201).json(responseData)
    })
    .catch((error) => {
      res.sendStatus(500)
      console.log(error)
    })
}

module.exports = {
  signUp,
  hasEmail
}
