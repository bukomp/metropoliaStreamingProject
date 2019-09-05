const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mainRouter = require('./controller/main')

app.use(bodyParser.json())
app.use(express.static('../front'))
app.use('/', mainRouter)

module.exports = app