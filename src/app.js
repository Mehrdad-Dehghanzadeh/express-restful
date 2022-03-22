require('module-alias/register')

const { isDev } = require('@utils')
const config = require('@config/app-config')
const conenctDB = require('@config/db')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const CheckApiVersion = require('@middlewares/api-version')
const routes = require('@routes')

const app = express()

if (isDev) {
  app.use(morgan('dev'))
}

app.use(express.static(config.publicDir()))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(CheckApiVersion)
app.use(routes)

conenctDB(() => {
  app.listen(config.port, () => {
    console.log(
      `server is runing at port:${config.port} for ${config.mode} mode`
    )
  })
})
