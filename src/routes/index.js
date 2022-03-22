const express = require('express')
const authRoot = require('./auth')

const router = express.Router()

const defualtRoutes = [
  {
    path: '/auth',
    module: authRoot
  }
]

defualtRoutes.forEach((route) => {
  router.use(route.path, route.module)
})

const devRoutes = []

module.exports = router
