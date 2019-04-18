let ObjectID = require('mongodb').ObjectID

module.exports = (app, db) => {

  app.get('/notes/:id', (req,res) => {
    const id = req.params.id
    const details = {'_id': new ObjectID(id)};
    db.db().collection('notes').findOne(details, (err, item) => {
      if(err) {
        res.send({
          'error': 'an error happended'
        })
      } else {
        res.send(item)
      }
    })
  })

  app.delete('/notes/:id', (req,res) => {
    const id = req.params.id
    const details = {'_id': new ObjectID(id)};
    db.db().collection('notes').remove(details, (err, item) => {
      if(err) {
        res.send({
          'error': 'an error happended'
        })
      } else {
        res.send('note ' + id + ' deleted')
      }
    })
  })

  app.put('/notes/:id', (req,res) => {
    const id = req.params.id
    const details = {'_id': new ObjectID(id)};
    const note = {text: req.body.body, title: req.body.title}
    db.db().collection('notes').update(details, note, (err, item) => {
      if(err) {
        res.send({
          'error': 'an error happended'
        })
      } else {
        res.send(item)
      }
    })
  })

  app.post('/notes', (req, res) => {
    const note = {text: req.body.body, title: req.body.title}
    db.db().collection('notes').insert(note, (err, result) => {
      if(err) {
        res.send({
          'error': 'an error happended'
        })
      } else {
        res.send(result.ops[0])
      }
    })
  })
}