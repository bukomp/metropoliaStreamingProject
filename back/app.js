const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mainRouter = require('./controller/main')
const middleware = require('./utility/middleware').requesLogger

app.use(middleware)
app.use(bodyParser.json())
app.use(express.static('../front'))
app.use('/', mainRouter)

module.exports = app