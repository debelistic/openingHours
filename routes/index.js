const express = require('express')
const { HoursController } = require('../controllers')

const Router = express.Router()

Router.get('/', (req, res) => {
  res.send({
    message: 'Welcome to opening Hours',
  })
})

Router.post('/hours', HoursController)
module.exports = Router
