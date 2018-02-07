const express = require('express')
const open = require('opn')
const sites = require('./sites.json')
const bookmarks = require('bookmarks-to-json-categorization')
const app = express()
const sites = require('./sites.json')

const PORT = 3004

app.set('port', PORT)


bookmarks(
  'bookmarks.html', 
  options = { pipeFile: 'bookmarks.json', exportToFile: true}, 
  function(data){
    console.log('bookmarks', data)
  }
);


app.get('/', (request, response) => {
  response.status(200).json(sites)
})

app.listen(app.get('port'), _ => open(`http://localhost:${app.get('port')}`))
