const express = require('express')
const open = require('opn')
const app = express()
const sites = require('./sites.json')

const PORT = 3004

app.set('port', PORT)

app.get('/', (request, response) => response.status(200).json(sites))

app.listen(app.get('port'), _ => open(`http://localhost:${app.get('port')}`))
