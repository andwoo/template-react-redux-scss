const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/../build')));
app.use(express.static(path.join(__dirname, '/../resources')));

const server = app.listen(8888, function() {
  console.log('Serving static files on port ' + server.address().port);
});
