const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { log } = require('debug')
const routes = require('./routes')

const app = express();

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

app.use(routes)

app.listen(process.env.PORT, () => {
  log(`Listening on PORT ${process.env.PORT}`)
});
