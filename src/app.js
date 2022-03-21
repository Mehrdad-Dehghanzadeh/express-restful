const { isDev } = require('./utils/utils')
const config = require('./config/app-config')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

if (isDev) {
    app.use(morgan('dev'))
}
app.use(express.static(config.publicDir()))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(config.port, () => {
    console.log(
        `server is runing at port:${config.port} for ${config.mode} mode`
    )
})
