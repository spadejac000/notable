module.exports = (app, db) => {
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
}