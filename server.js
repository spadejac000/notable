const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect("mongodb://jacob1:jacob1@ds139896.mlab.com:39896/notable", {useNewUrlParser: true});

app.post('/notes', (req, res) => {
    const note = {text: req.body.body, title: req.body.title}
    db.collection('notes').insert(note, (err, result) => {
      if(err) {
        res.send({
          'error': 'an error happended'
        })
      } else {
        res.send(result.ops[0])
      }
    })
  })