const express = require('express')
const app = express()
const moment = require('moment')
const city = require ('../City')
const weather = require ('./weather')
const mongoose = require('mongoose')
const port = 3002
const api = require('../api')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/',api)

mongoose.connect('mongodb://localhost/weather', { useNewUrlParser: true})



app.listen(port, function(){console.log('listeing on port '+port)})

