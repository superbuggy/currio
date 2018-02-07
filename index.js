const express = require('express')
const open = require('opn')
const bookmarks = require('bookmarks-to-json-categorization')
const app = express()
const sites = require('./sites.json')

const PORT = 3004
const BOOKMARK_FILENAME = 'bookmarks_2_7_18.html' 

app.set('port', PORT)


app.get('/', (request, response) => {
  bookmarks(
    BOOKMARK_FILENAME, 
    options = { pipeFile: 'bookmarks.json', exportToFile: true}, 
    function (data) {
      console.log('bookmarks', data)
      response.status(200).json(JSON.parse(data))
    }
  );
})



app.listen(app.get('port'), _ => open(`http://localhost:${app.get('port')}`))
