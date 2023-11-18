const express = require('express');
const app = express();
const path = require('path');
const router = require('./src/router');

app.use('/', router);

const pathToIndex = path.resolve(__dirname, '../client/index.html');
app.use('/*', (request,response)=>{
  response.sendFile(pathToIndex);
});

app.use(express.static(path.resolve(__dirname, 'uploads')));


module.exports = app;
