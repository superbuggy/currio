const express = require('express')
const open = require('opn')
const app = express()

const PORT = 3004

app.set('port', PORT)

const sites = require('./sites.json')
app.get('/', (request, response) => {
  response.status(200).json(sites)
})

app.listen(app.get('port'), _ => {
  open(`http://localhost:${app.get('port')}`)
})
