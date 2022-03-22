const express = require('express')

const validation = require('@middlewares/validation')
const authValidate = require('@validations/auth-validate')

const router = express.Router()

router.post('/sign-up', validation(authValidate.signUp))

module.exports = router
