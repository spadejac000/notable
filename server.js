const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 5000;

app.listen(port, () => {
  console.log('we are live on port ' + port)
})