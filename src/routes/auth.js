const express = require('express')

const validation = require('@middlewares/validation')
const authValidate = require('@validations/auth-validate')
const { signUp } = require('@controllers/auth-controller')

const router = express.Router()

router.post('/sign-up', validation(authValidate.signUp), signUp)

module.exports = router
