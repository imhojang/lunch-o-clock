const path = require('path')
const express = require('express')
const compress = require('compression')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const controller = require('./controller')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mini-project-lunch', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const app = express()
app.use(compress())
app.use(bodyParser.json())
app.use(cors())
app.use('/api', controller)

const buildDir = path.resolve(__dirname, '..', 'build')
app.use(express.static(buildDir))
app.get('/', function (req, res) {
  res.sendFile(path.join(buildDir, 'index.html'))
})

app.listen(2018, function () {
  console.log('Lunch app is listening on port 2018!') // eslint-disable-line no-console
})

module.exports = app
