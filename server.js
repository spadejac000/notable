const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect(db.url, (err, database) => {
  if(err) {
    return console.log(err)
  } else {
    require('./app/routes')(app, database);
    app.listen(port, () => {
      console.log("we are live on port " + port);
    })
  }
});

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