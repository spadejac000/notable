module.exports = (app, db) => {
  app.post('/notes', (req, res) => {
    // create note here
    res.send('hello world');
  })
}